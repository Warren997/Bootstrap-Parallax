// Parallax Home
const parallaxHome = document.querySelector('.parallax-home');
window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    parallaxHome.style.backgroundPositionY = offset * -0.5 + "px";
})

// Parallax Destination
const parallaxDestination = document.querySelector('.parallax-destination');
window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    parallaxDestination.style.backgroundPositionY = offset * -0.5 + "px";
})

// Parallax Contact
const parallaxContact = document.querySelector('.parallax-contact');
window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    parallaxContact.style.backgroundPositionY = offset * -0.5 + "px";
})