// Scroll to top button

// Get the button
let btnBackToTop = document.getElementById("btn-back-to-top");

// When the user scrolls down from the top of the document, show the button
document.onscroll = () => {
    scrollFunction();
};

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