// document.addEventListener('DOMContentLoaded', () => {
//     const day = new Date();
//     const dayOfWeek = day.getDay();

//     if (dayOfWeek >= 1 && dayOfWeek <=3) {
//         showBanner();
//     } else {
//         closeBanner();
//     }
// });

// function showBanner() {
//     document.querySelector('.event-banner').style.display = 'block';
// }

// function closeBanner() {
//     document.querySelector('.event-banner').style.display = 'none';
// }

function eventBanner() {
    let event = document.querySelector('.event-banner');
    if (event.style.display === 'none') {
        event.style.display = 'block';
    } else {
        event.style.display = 'none';
    }
}