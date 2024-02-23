const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

function displayList(item) {
    let listChapter = document.createElement('ul');
    let  deleteButton = document.createElement('button');
    listChapter.textContent = item;
    deleteButton.textContent ='❌';
    deleteButton.classList.add('delete');
    listChapter.append(deleteButton);
    list.append(listChapter);
    deleteButton.addEventListener('click', () => {
        list.removeChild(listChapter);
        deleteChapter(listChapter.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}
