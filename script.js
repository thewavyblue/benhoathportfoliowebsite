document.addEventListener('DOMContentLoaded', function() {

    const btnDev = document.getElementById('btn_dev');
    const btnDesign = document.getElementById('btn_design');
    const btnAll = document.getElementById('btn_all');
    let projectCards = document.querySelectorAll('.project-card');

    btnDesign.addEventListener('click', function() {
        // Show only 'design' projects, hide others
        projectCards.forEach(function(card) {
            if (card.classList.contains('design')) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });

    btnDev.addEventListener('click', function() {
        // Show only 'development' projects, hide others
        projectCards.forEach(function(card) {
            if (card.classList.contains('dev')) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });

    btnAll.addEventListener('click', function() {
        // Show all projects
        projectCards.forEach(function(card) {
            card.style.display = 'flex';
        });
    });
    
});

let navMenuListMob = document.querySelector('.nav-menu-list-mob');

function menu() {
    if (navMenuListMob.style.display === 'none' ) {
        navMenuListMob.style.display = 'flex';
    } else {
        navMenuListMob.style.display = 'none';
    }
}

// Scroll to top button

// Get the button
let btnBackToTop = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        btnBackToTop.style.display = "block";
    } else {
        btnBackToTop.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}