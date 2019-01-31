var landingScrolled = false;
var animLocked = false;

const landingContainerElem = 
    document.getElementById("landing-container");
const infoContainerElem = 
    document.getElementById("info-page-container");

var scrollFromLanding = (event) => {
    if (event.deltaY > 0 && !landingScrolled && !animLocked) {
        landingSrolled = true;
        landingContainerElem.classList.add("hidden");
        infoContainerElem.classList.remove("hidden");
    }
}

// Add scroll event listener/functions for mobile devices.

window.addEventListener("wheel", scrollFromLanding);
window.addEventListener("scroll", scrollFromLanding);


var onLoadLandingAnims = () => {
    animLocked = true;
    const name = document.getElementById("name-big");
    const info = document.getElementById("info-big");
    const jobTitle = document.getElementById("jtitle-wrapper");
    const logoImg = document.getElementById("landing-img");

    void name.offsetWidth;

    //TODO: Find a better way of making delays.
    // Also add classes for the transitions instead of inline styles.

    // Big name animation.
    name.style.opacity = 1;
    name.style.transform = "none";

    // Info animations.
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
        jobTitle.children[0].style.opacity = "1";
        animLocked = false;
    }, 3500);


}

window.onload = onLoadLandingAnims();


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

swipeDetect(window, (dir) => {
    if (!landingScrolled && !animLocked && dir == "up") {
        landingSrolled = true;
        landingContainerElem.classList.add("hidden");
        infoContainerElem.classList.remove("hidden");
    }
});