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
    console.log("Total Projects: " + allQty); 

    let devQty = devProjects.length;
    console.log("Total Dev Projects: " + devQty); 

    let designQty = designProjects.length;
    console.log("Total Design Projects: " + designQty); 
    
    let fpQty = futureProjects.length;
    console.log("Total Future Projects: " + fpQty); 


    // Add a number indicator next to the filter label text counting the amount of projects in the category
    btnDev.textContent += `(${devQty})`;
    btnDesign.textContent += `(${designQty})`;
    btnAll.textContent += `(${allQty})`;


    // Add a click listener to the buttons and show/hide depending on display state
    btnDesign.addEventListener('click', function() {
        // Style the button to show it's the active filter
    

        // Show only 'design' projects, hide others
        projectCards.forEach(function(card) {
            if (card.classList.contains('design')) {
                card.style.display = 'flex';
                // Indicate 'Filter design'
                btnDesign.classList.add('btn-filter-active');
                btnDev.classList.remove('btn-filter-active');
                btnAll.classList.remove('btn-filter-active');
            } else {
                card.style.display = 'none';
                btnDesign.classList.remove('btn-filter-active');
            }
        });
    });

    btnDev.addEventListener('click', function() {
        projectCards.forEach(function(card) {
            if (card.classList.contains('dev')) {
                card.style.display = 'flex';
                // Indicate 'Filter dev'
                btnDev.classList.add('btn-filter-active');
                btnDesign.classList.remove('btn-filter-active');
                btnAll.classList.remove('btn-filter-active');
            } else {
                card.style.display = 'none';
                btnDev.classList.remove('btn-filter-active');
            }
        });
    });

    btnAll.addEventListener('click', function() {
        // Show all projects
        projectCards.forEach(function(card) {
            card.style.display = 'flex';
            // Indicate 'Filter all'
            btnAll.classList.add('btn-filter-active');
            btnDev.classList.remove('btn-filter-active');
            btnDesign.classList.remove('btn-filter-active');
        });
    });
    
});