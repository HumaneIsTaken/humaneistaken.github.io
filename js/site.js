var landingScrolled = false;
var animLocked = false;

let landingContainerElem = 
    document.getElementById("landing-container");
let infoContainerElem = 
    document.getElementById("info-page-container");
let dropdownMsgElem = 
    document.getElementById("dropdown-msg");

var onLoadLandingAnims = () => {

    animLocked = true;
    const name = document.getElementById("name-big");
    const info = document.getElementById("info-big");
    const jobTitle = document.getElementById("jtitle-wrapper");
    const logoImg = document.getElementById("landing-img");
    const scrollMemo = document.getElementById("scroll-memo");

    void name.offsetWidth;

    //TODO: Find a better way of making delays.
    // Also add classes for the transitions instead of inline styles.

    // Big name animation.
    name.style.opacity = 1;
    name.style.transform = "none";

    // Info animations. WARNING SUPER GROSS CODE AHEAD
    setTimeout(()=> {
        info.children[0].style.opacity = 1;
        logoImg.style.opacity = 1;
    }, 1000);
    setTimeout(()=> {
        info.children[1].style.opacity = 1;
    }, 1500);
    setTimeout(()=> {
        info.children[2].style.opacity = 1;
    }, 2000);

    // Job title animations.
    setTimeout(()=> {
        jobTitle.style.width = "80%";
        jobTitle.style.opacity = 1;
    }, 2500);

    setTimeout(() => {
        jobTitle.children[0].style.height = "auto";
        jobTitle.children[0].style.opacity = 1;
        animLocked = false;
    }, 3500);

    setTimeout(() => {
        scrollMemo.style.opacity = 1
        animLocked = false;
    }, 4200);

}

// credit: http://www.javascriptkit.com/javatutors/touchevents2.shtml
// and https://codepen.io/ganmahmud/pen/RaoKZa?editors=0010
// Modified version of the script that only cares about the Y axis and
// threshold of the scroll.
function swipeDetect(el, callback){
  
    var touchsurface = el,
    swipedir,
    startY,
    distY,
    threshold = 100, //required min distance traveled to be considered swipe
    handleswipe = callback || function(swipedir){}
  
    touchsurface.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0]
        swipedir = 'none'
        startY = touchobj.pageY
    }, false)
  
    touchsurface.addEventListener('touchmove', function(e){
        var touchobj = e.changedTouches[0]
        distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
        if (Math.abs(distY) >= threshold ){ // 2nd condition for vertical swipe met
            swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
        }
        handleswipe(swipedir)
    }, false)
}

// On swipe, do transition
swipeDetect(window, (dir) => scrollTransition(dir));
// On mouse wheel scroll down, do transition if able
var scrollFromLanding = (event) => {
    if (event.deltaY > 0) { scrollTransition(null) }
}

// Scroll transition function
var scrollTransition = (dir) => {
    if (!landingScrolled && !animLocked && (dir ? (dir == "up") : true)) {
        landingScrolled = true;

        landingContainerElem.style.transform = "translateY(-70%)";
        landingContainerElem.style.opacity = 0;

        setTimeout(()=> {
            landingContainerElem.classList.add("hidden");
            infoContainerElem.classList.remove("hidden");
        }, 1000);

        setTimeout(()=> {
            infoContainerElem.style.opacity = 1;
        }, 1050);

    }
};

// Script for the header contact buttons.
var contactClick = (type) => {

    const emailLink = '<a href="mailto:jastoreu17@outlook.com">jastoreu17@outlook.com</a>';
    const gitLink = '<a href="https://github.com/humaneistaken">https://github.com/humaneistaken</a>';
    let innerHTML = "";

    switch(type) {
        case 'world':
            innerHTML = "I'm currently in Madrid, Spain!";
            break;
        case 'git':
            innerHTML = gitLink;
            break;
        case 'mail':
            innerHTML = emailLink;
            break;
    }

    dropdownMsgElem.style.transform = "translateY(-200%)";
    dropdownMsgElem.style.opacity = 0;
    dropdownMsgElem.style.display = "flex";
    dropdownMsgElem.innerHTML = innerHTML;

    setTimeout(() =>{
        dropdownMsgElem.style.transform = "none";
        dropdownMsgElem.style.opacity = 1;
    }, 100)

    setTimeout(() => {
        dropdownMsgElem.style.opacity = 0;
        dropdownMsgElem.style.transform = "translateY(-200%)";
    }, 3000)

};

window.onload = onLoadLandingAnims();
window.addEventListener("wheel", scrollFromLanding);
