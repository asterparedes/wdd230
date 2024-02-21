document.querySelector('#year').textContent = new Date().getFullYear();

const lastModifiedDate = document.lastModified;
document.querySelector('#lastModified').innerHTML = `Last Modification: ${lastModifiedDate}`;