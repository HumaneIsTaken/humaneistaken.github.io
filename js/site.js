var landingScrolled = false;

const landingContainerElem = 
    document.getElementById("landing-container");
const infoContainerElem = 
    document.getElementById("info-page-container");

var scrollFromLanding = (event) => {
    if (event.deltaY > 0 && !landingScrolled) {
        landingSrolled = true;
        landingContainerElem.classList.add("hidden");
        infoContainerElem.classList.remove("hidden");
    }
}

// Add scroll event listener/functions for mobile devices.

window.addEventListener("wheel", scrollFromLanding);



var onLoadLandingAnims = () => {
    const name = document.getElementById("name-big");
    const info = document.getElementById("info-big");
    const jobTitle = document.getElementById("jtitle-wrapper");

    // Big name animation.
    name.style.opacity = 1;
    name.style.transform = "none";

    // Info animations.
    setTimeout(()=> {
        info.children[0].style.opacity = 1;
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
        
    }, 3500);


}

onLoadLandingAnims();
