const statement = document.getElementsByClassName("statement");
let statementQuote = document.querySelector(".statement .statement-quote");

import { quotes } from "/quotes.js";

function getStatement(i) {
    console.log(statementQuote);
    console.log(`I'm ${quotes[i].quote}`);
    statementQuote.innerHTML = `I'm ${quotes[i].quote}`;
}

getStatement(globalIndex);

// set a variable for the z-index of statement div and co-ords for the mouse pointer
let globalIndex = 0,
  last = { x: 0, y: 0 };

// set the mouse pointer to the center of the statement div and it's z-index
const activate = (statement, x, y) => {
  statement.style.left = `${x}px`;
  statement.style.top = `${y}px`;
  statement.style.zIndex = globalIndex;

// set the statement dataset status active 
  quotes[globalIndex].status = "active";

// the previous statement in the line's co-ords
  last = { x, y };
};

// create a variable to calculate distance from the previous to the current statement div
const distanceFromLast = (x, y) => {
  return Math.hypot(x - last.x, y - last.y);
};

// event handler when the mouse moves
const handleOnMove = (e) => {

  if (distanceFromLast(e.clientX, e.clientY) > window.innerWidth / 20) {    

    // create variable 'lead', to establish the lead statement by way of z-index – and its relationship to the tail
    const lead = statement[globalIndex % statement.length],
      tail = statement[(globalIndex - 5) % statement.length];

    activate(lead, e.clientX, e.clientY);

    if (tail) tail.dataset.status = "inactive";

    globalIndex++;
    console.log(globalIndex);
    getStatement(globalIndex);
  }
};

window.onmousemove = (e) => handleOnMove(e);

window.ontouchmove = (e) => handleOnMove(e.touches[0]);