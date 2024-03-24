const eventButton = document.querySelector('#event-button');
const eventBanner = document.querySelector('.event-banner');
const day = new Date();
const dayOfWeek = day.getDay();

const initializeBanner = () => {
    if (dayOfWeek >= 1 && dayOfWeek <=3) {
        showBanner();
    } else {
        closeBanner();
    }
}

const showBanner = () => {
    eventBanner.style.display = 'block';
};

const closeBanner = () => {
    eventBanner.style.display = 'none';
};


eventButton.addEventListener('click', () => {
    closeBanner();
});

initializeBanner();