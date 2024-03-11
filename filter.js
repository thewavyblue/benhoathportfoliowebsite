document.addEventListener('DOMContentLoaded', function() {

    const btnDev = document.getElementById('btn_dev');
    const btnDesign = document.getElementById('btn_design');
    const btnAll = document.getElementById('btn_all');
    let projectCards = document.querySelectorAll('.project-card');
    let devProjects = document.querySelectorAll('.dev');
    let designProjects = document.querySelectorAll('.design');
    let futureProjects = document.querySelectorAll('.fp');

    // Count the number of projects in a category
    let allQty = projectCards.length;

    let devQty = devProjects.length;

    let designQty = designProjects.length;
    
    let fpQty = futureProjects.length;


    // Add a number indicator next to the filter label text counting the amount of projects in the category
    btnDev.textContent += `(${devQty})`;
    btnDesign.textContent += `(${designQty})`;
    btnAll.textContent += `(${allQty})`;


    // Show a message to describe what the user is actively viewing
    let msgView = document.getElementById('msg-projects-viewing');
    

    // Add a click listener to the buttons and show/hide depending on display state

    // Show only 'design' projects, hide others
    btnDesign.addEventListener('click', function() {
        projectCards.forEach(function(card) {
            if (card.classList.contains('design')) {
                card.style.display = 'flex';
                // Indicate 'Filter design'
                msgView.textContent = `Currently viewing design projects`;
                btnDesign.classList.add('btn-filter-active');
                btnDev.classList.remove('btn-filter-active');
                btnAll.classList.remove('btn-filter-active');
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Show only 'dev' projects, hide others
    btnDev.addEventListener('click', function() {
        projectCards.forEach(function(card) {
            if (card.classList.contains('dev')) {
                card.style.display = 'flex';
                // Indicate 'Filter dev'
                msgView.textContent = `Currently viewing development projects`;
                btnDev.classList.add('btn-filter-active');
                btnDesign.classList.remove('btn-filter-active');
                btnAll.classList.remove('btn-filter-active');
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Show all projects
    btnAll.addEventListener('click', function() {
        projectCards.forEach(function(card) {
            card.style.display = 'flex';
            // Indicate 'Filter all'
            msgView.textContent = `Currently viewing all projects`;
            btnAll.classList.add('btn-filter-active');
            btnDev.classList.remove('btn-filter-active');
            btnDesign.classList.remove('btn-filter-active');
        });
    });
    
});