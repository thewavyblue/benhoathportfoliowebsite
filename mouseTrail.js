// import list of quotes
import { quotes } from "./quotes.js";

// declare DOM variables to get 'statement' div and its child
const statement = document.querySelector(".statement");
const statementQuote = document.querySelector(".statement-quote"); 

// declare the quoteIndex which determines the quote displayed, and the last known position of the statement bubble.
let quoteIndex = 0;
let last = { x: 0, y: 0 };

function closeStatementBubble() {
    statement.classList.add("hidden");
}

const activateBubble = (bubble, x, y) => {
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;
    last = { x, y };
    statement.addEventListener("dblclick", closeStatementBubble);
}

const calculateDistance = (x, y) => Math.hypot(x - last.x, y - last.y);

const getStatement = (index) => {
    const adjustedIndex = index % quotes.length;
    statementQuote.innerHTML = `I'm ${quotes[adjustedIndex].quote}<br><span class="fine-text">[Double click / tap anywhere to hide]</span>`;
}

const handleMouseMove = (e) => {
    const distanceThreshold = window.innerWidth / 20;
    if (calculateDistance(e.clientX, e.clientY) > distanceThreshold) {
        const currentQuote = statement;
        const previousQuote = statement.previousElementSibling || statement.parentNode.lastElementChild;
        
        activateBubble(currentQuote, e.clientX, e.clientY);
        if (previousQuote) previousQuote.dataset.status = "inactive";

        quoteIndex++;
        getStatement(quoteIndex);
    }
}

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('touchmove', (e) => handleMouseMove(e.touches[0]));