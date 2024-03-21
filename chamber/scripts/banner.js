// let eventBanner = getElementByClassName('open-banner');
// let i;

// for (i = 0; i < eventBanner.length; i++) {
//     eventBanner[i].addEventListener('click', function() {
//         this.classList.toggle('active');
//         let banner = this.nextElementSibling;
//         if (banner.style.maxHeight) {
//             banner.style.maxHeight = null;
//         } else {
//             banner.style.maxHeight = banner.scrollHeight + 'px';
//         }
//     });
// }

document.addEventListener('DOMContentLoaded', () => {
    const day = new Date();
    const dayOfWeek = day.getDay();

    if (dayOfWeek >= 1 && dayOfWeek <=3) {
        showBanner();
    } else {
        closeBanner();
    }
});

function showBanner() {
    document.querySelector('.event-banner').style.display = 'block';
}

function closeBanner() {
    document.querySelector('.event-banner').style.display = 'none';
}