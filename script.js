document.addEventListener('DOMContentLoaded', function() {

    const btnDev = document.getElementById('btn_dev');
    const btnDesign = document.getElementById('btn_design');
    const btnAll = document.getElementById('btn_all');
    let designContent = document.querySelector('.design');
    let devContent = document.querySelector('.dev');

        btnDesign.addEventListener('click', function() {
        // Toggle the visibility of the content with the 'design' class
            if (designContent.style.display === 'none' || designContent.style.display === '') {
                designContent.style.display = 'flex';
                devContent.style.display = 'none';
                console.log("show content incl. design, " + designContent.style.display);
            } else {
                devContent.style.display = 'none';
            }
        });
        
        btnDev.addEventListener('click', function() {
            // Toggle the visibility of the content with the 'dev' class
            if (devContent.style.display === 'none' || devContent.style.display === '') {
                devContent.style.display = 'flex';
                designContent.style.display = 'none';
                console.log("show content incl. dev, " + devContent.style.display);
            } else {
                designContent.style.display = 'none';
            }
        });

        btnAll.addEventListener('click', function() {
            // Toggle the visibility of the content with the 'dev' class
            if (devContent.style.display === 'none' || designContent.style.display === 'none') {
                devContent.style.display = 'flex';
                designContent.style.display = 'flex';
                console.log("show all " + devContent.style.display + designContent.style.display);
            }
        });
});