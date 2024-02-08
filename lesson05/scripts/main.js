const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
    if (input.value != '') {
        const listChapter = document.createElement('li');
        const deleteButton = document.createElement('button');

        listChapter.textContent = input.value;
        deleteButton.textContent ='❌';
        listChapter.append(deleteButton);
        list.append(listChapter);

        deleteButton.addEventListener('click', () => {
            list.removeChild(listChapter);
        });
        
        input.focus();
        input.value = '';
    }

    // Another function to  add chapter if you don't want a if statement. 

    // const listChapter = document.createElement('li');
    // const deleteButton = document.createElement('button');

    // listChapter.textContent = input.value;
    // deleteButton.textContent ='❌'; 
    // listChapter.append(deleteButton);
    // list.append(listChapter);

    // deleteButton.addEventListener('click', () => {
    //     list.removeChild(listChapter);
    // });
    
    // input.focus();
    // input.value = '';
});