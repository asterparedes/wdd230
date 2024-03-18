const eventBanner = document.querySelector('.event-banner');

eventBanner.addEventListener('click', () => {
    const day = new Date();
    const dayOfWeek = day.getDay();

    if (dayOfWeek >= 1 && dayOfWeek <=3) {
        eventBanner.classList.toggle('open');
    } else {
        eventBanner.textContent = 'X';
        eventBanner.classList.toggle('close');
    }
})