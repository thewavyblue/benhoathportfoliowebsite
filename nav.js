let navMenuListMob = document.querySelector(".nav-menu-list-mob");
const menuItems = document.querySelectorAll(".menu-link");

function menu() {
    if (navMenuListMob.style.display === "none" ) {
        navMenuListMob.style.display = "flex";
    } else {
        navMenuListMob.style.display = "none";
    }
}

menuItems.forEach(function(item) {
    item.addEventListener("click", function() {
        // Close the menu
        navMenuListMob.style.display = "none";
        console.log("menu closed");
    });
});

// On mobile, when the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
const mobScreenSize = 425;
const screenWidth = window.innerWidth;
let prevScrollPos = window.scrollY;
window.onscroll = () => {
    let currentScrollPos = window.scrollY;
    if (screenWidth <= mobScreenSize) {
        if (prevScrollPos > currentScrollPos) {
            document.getElementById("nav-bar").style.top = "0";
        } else {
            document.getElementById("nav-bar").style.top = "-6rem";
        }
        console.log(screenWidth);
        prevScrollPos = currentScrollPos;
    } 
}