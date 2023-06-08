// Array to store tasks
let tasks = [];

// Function to add a task to the list
function addTask() {
  const titleInput = document.getElementById('titleInput');
  const descriptionInput = document.getElementById('descriptionInput');
  const startDateInput = document.getElementById('startDateInput');
  const completionDateInput = document.getElementById('completionDateInput');

  const title = titleInput.value;
  const description = descriptionInput.value;
  const startDate = startDateInput.value;
  const completionDate = completionDateInput.value;

  if (title === '' || description === '' || startDate === '' || completionDate === '') {
    alert('Please fill in all fields.');
    return;
  }

  const task = {
    title: title,
    description: description,
    startDate: startDate,
    completionDate: completionDate,
    completed: false
  };

  tasks.push(task);
  renderTasks();

  // Reset input fields
  titleInput.value = '';
  descriptionInput.value = '';
  startDateInput.value = '';
  completionDateInput.value = '';
}

// Function to render the tasks on the page
function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => markComplete(index));

    const title = document.createElement('span');
    title.innerText = task.title;

    const description = document.createElement('span');
    description.innerText = task.description;

    const startDate = document.createElement('span');
    startDate.innerText = task.startDate;

    const completionDate = document.createElement('span');
    completionDate.innerText = task.completionDate;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => deleteTask(index));

    taskItem.appendChild(checkbox);
    taskItem.appendChild(title);
    taskItem.appendChild(description);
    taskItem.appendChild(startDate);
    taskItem.appendChild(completionDate);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
  });
}

// Function to mark a task as complete
function markComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
