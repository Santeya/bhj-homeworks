const newTask = document.getElementById('task__input');
const addButton = document.getElementById('tasks__add');
const tasks = document.getElementById('tasks__list');

addButton.addEventListener('click', addTaskByButton);

function addTaskByButton(event) {
    event.preventDefault();
    if (newTask.value !== '') {
        tasks.innerHTML += `
        <div class="task">
            <div class="task__title">
            ${ newTask.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`
        newTask.value = '';
    }
}
/*
document.addEventListener('keydown', addTaskByKey);

function addTaskByKey(event) {
    if (event.key === 'Enter' && newTask.value !== '') {
        tasks.innerHTML += `
        <div class="task">
            <div class="task__title">`
            + newTask.value +
            `</div>
            <a href="#" class="task__remove">&times;</a>
        </div>`
        newTask.value = '';
    }
}
*/
tasks.onclick = function (event) {
    if (event.target.classList.contains('task__remove')) {
        event.target.parentElement.remove();
    }
}
