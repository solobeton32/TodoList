
const taskInput = document.querySelector('#input');
const inputButton = document.querySelector('#input-button');
const taskList = document.querySelector('#task-list');

inputButton.addEventListener('click', add); // evento click per aggiungere
taskList.addEventListener('click', remove); // evento click per rimuovere
function add(e) {
    if (taskInput.value === "") { // se il valore della stringa è vuota
        alert('Please, aggiungi qualcosa');
    }
    const li = document.createElement('li');//creo una lista di elementi
    li.className = 'task'; // do una classe a la nostra lista creata
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a'); // creo un link
    link.className = 'delete-todo'; // do una classe a la nostra link creta
    link.innerHTML = '<h3>x</h3>'; //aggiugo una x al nostro link creta
    li.appendChild(link); //aggiungo il link nel li
    taskList.appendChild(li); //mettere  li dentro  ul
    taskInput.value = ""; //lasciamo vuoto input

    e.preventDefault();
}
//function remove
function remove(e) {
    if (e.target.parentElement.classList.contains('delete-todo')) {
        e.target.parentElement.parentElement.remove();
    }
}

