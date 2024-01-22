document.addEventListener('DOMContentLoaded', function() {

    const btnMenuMob = document.getElementById('nav-menu-mob');
    let navMenuList = document.querySelector('.nav-menu-list-mob');
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

    btnMenuMob.addEventListener('click', function() {
        if (navMenuList.style.display === 'none' ) {
            navMenuList.style.display = 'flex'
        } else {
            navMenuList.style.display = 'none';
        }
    })

});