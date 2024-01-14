document.querySelector('#year').textContent = new Date().getFullYear();

const lastModifiedDate = document.lastModified;
document.querySelector('#lastModified').innerText = `Last Modification: ${lastModifiedDate}`;