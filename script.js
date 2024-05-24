const inputElement = document.getElementById('task-input');
const addTaskIcon = document.getElementById('add-task-icon');
const tasksListElement = document.getElementById('tasks-list');

function addTask() {
  if (inputElement.value === '') {
    return alert('You must write something!');
  }

  let li = document.createElement('li');
  li.innerHTML = inputElement.value;
  tasksList.appendChild(li);
  inputElement.value = '';

  const tasksList = {
    order: 0,
    value: inputElement.value,
    isDone: false,
  };

  localStorage.setItem('tasksList', JSON.stringify(tasksList));
}

function initTasks() {
  console.log('init');
  if (localStorage.getItem('tasksList').length > 0) {
  }
}

initTasks();
