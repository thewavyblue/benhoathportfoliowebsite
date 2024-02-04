let navMenuListMob = document.querySelector('.nav-menu-list-mob');
const menuItems = document.querySelectorAll('.menu-link');

function menu() {
    if (navMenuListMob.style.display === 'none' ) {
        navMenuListMob.style.display = 'flex';
    } else {
        navMenuListMob.style.display = 'none';
    }
}

menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
        // Close the menu
        navMenuListMob.style.display = 'none';
        console.log('menu closed');
    });
});



// Hide the nav bar on scroll
// document.addEventListener('scroll', function() {
//     let navBarMob = document.querySelector('.nav-bar');
//     navBarMob.classList.add = 'nav-bar-scrolled';
// });