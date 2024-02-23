const visitsDisplay = document.querySelector('.visits');
let numberVisits = Number(window.localStorage.getItem('numVisits-ls')) || 0;

if (numberVisits !== 0) {
    visitsDisplay.textContent = numberVisits;
}else{
    visitsDisplay.textContent = `Welcome! This is your first visit!`;
}

numberVisits++;
localStorage.setItem('numVisits-ls', numberVisits);