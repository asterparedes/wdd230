document.querySelector('#year').textContent = new Date().getFullYear();

const lastModifiedDate = document.lastModified;
document.querySelector('#lastModified').innerHTML = `Last Modification: ${lastModifiedDate}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
})