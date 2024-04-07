const mobileButton = document.querySelector('#mobile-menu');
const navigation = document.querySelector('.main-menu');
const modeButton = document.querySelector('#mode');
const main = document.querySelector('main');

mobileButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    mobileButton.classList.toggle('open');
});

modeButton.addEventListener('click', () => {
    if (modeButton.textContent.includes('🌑')) {
        main.style.background = '#000';
        main.style.color = '#fff';
        modeButton.textContent = '🌞';
    } else {
        // main.style.background = '#FAF3DD';
        // main.style.color = '#32292F'; change the color
        modeButton.textContent = '🌑';
    }
});