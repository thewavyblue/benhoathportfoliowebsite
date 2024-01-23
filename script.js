document.addEventListener('DOMContentLoaded', function() {

    const btnMenuMob = document.getElementById('nav-menu-mob');
    let navMenuListMob = document.querySelector('.nav-menu-list-mob');

    const btnDev = document.getElementById('btn_dev');
    const btnDesign = document.getElementById('btn_design');
    const btnAll = document.getElementById('btn_all');
    let projectCards = document.querySelectorAll('.project-card');
    
    let btnNav = document.querySelectorAll('main-nav.li');


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

    btnMenuMob.addEventListener('click', function() {
        // Open and close nav menu on <700px screen sizes
        if (navMenuListMob.style.display === 'none' ) {
            navMenuListMob.style.display = 'flex';
        } else {
            navMenuListMob.style.display = 'none';
        }
    })

    btnNav.addEventListener('click', function() {
        // Close small screen nav menu on click
        btnNav.forEach(function(link) {
            if (navMenuList.style.display === 'flex' ) {
                navMenuList.style.display = 'none';
            }
        });
    });

});