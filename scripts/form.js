const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const message = document.querySelector('#formmessage');

password2.addEventListener('focusout', checkSame);

function checkSame() {
    if (password.value !== password2.value) {
        message.textContent = '❗️Password DO NOT MATCH!';
        message.style.visibility = "show";
        password2.style.backgroundColor = '#ffffff';
        password2.value = '';
        password2.focus();
    } else {
        message.style.display = "none";
        password2.style.backgroundColor = '#fff';
        password2.style.color = '#2B2D42';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    function handleSubmit(event) {
        event.preventDefault();

        let formt = event.target;
        let formData = new FormData(formt);
    }

    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
});

const rangevalue = document.querySelector('#rangevalue');
const range = document.querySelector('#r');

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}