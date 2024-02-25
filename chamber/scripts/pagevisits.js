const msToDays = 84600000;
const todayInMs = Date.now();
const dateToday = new Date(todayInMs);

const visitsDisplay = document.querySelector('.visits');
let numberVisits = Number(window.localStorage.getItem('numberVisits-ls')) || 0;

let lastDateTime = new Date(Number(window.localStorage.getItem('lastDateTime-ls')) ||  todayInMs);
let lastVisitInDays = ((todayInMs - lastDateTime.getTime()) / msToDays).toFixed(0);

if (numberVisits == 0 ) {
    visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
}else if (numberVisits == 1 && lastVisitInDays < 1) {
    visitsDisplay.textContent = `Back so soon! Awesome!`
} else {
    if (lastVisitInDays > 1 || lastVisitInDays == 0){
        visitsDisplay.textContent = `You last visited ${lastVisitInDays} days ago.`
    }else{
        visitsDisplay.textContent = `You last visited ${lastVisitInDays} day ago.`
    }
}

numberVisits++;
localStorage.setItem('numberVisits-ls', numberVisits);
localStorage.setItem('lastDateTime-ls', todayInMs.toString());