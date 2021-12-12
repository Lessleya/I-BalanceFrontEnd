import { getParam } from './utils.js';
import { addEditTask } from './task.js';

document
  .getElementById('addTaskBtn')
  .addEventListener('click', () => createModal('add', null));

export function createModal(operation, data) {
  /* Set category = ?category*/
  let category;
  if (operation == 'add') {
    category = getParam('category');
  } else if (operation == 'edit') {
    category = data.category;
  }

  // Create the form modal using javascript
  const taskModal = document.getElementById('taskModal');
  taskModal.innerHTML = `<div class="modal-content">
  <div class="modal-header">
  <span class="close">&times;</span>
  <h2>${operation[0].toUpperCase()}${operation.substring(1)} Task</h2>
  </div>
  <div class="modal-body">
  <!-- ${operation} task - Form -->
  <form id="${operation}Task">
  <h1 class="default-input-style" id=taskHeader>Title</h1>
  <!-- Task Title -->
  <label for="taskTitle">Title</label>
  <input type="text" name="taskTitle" id="taskTitle" ${
    operation == 'edit' ? `value="${data.title}"` : ''
  }>

  <!-- Task Category -->
  <label for="taskCategory">Category</label>
  <select name="taskCategory" id="taskCategory" ${
    operation == 'add' ? 'disabled' : ''
  }>
    <option value="spiritual" ${
      category == 'spiritual' ? 'selected' : ''
    }>Spiritual</option>
    <option value="physical" ${
      category == 'physical' ? 'selected' : ''
    }>Physical</option>
    <option value="intellectual" ${
      category == 'intellectual' ? 'selected' : ''
    }>Intellectual</option>
    <option value="social" ${
      category == 'social' ? 'selected' : ''
    }>Social</option>
  </select>

  <label for="taskDate">Date</label>
  <input type="datetime-local" name="taskDate" id="taskDate" ${
    operation == 'edit' ? `value="${data.date}"` : ''
  }>

  <!-- Task Description -->
  <label for="taskNotes">Notes</label>
  <textarea id="taskNotes" name="taskNotes">${
    operation == 'edit' ? `${data.notes}` : ''
  }</textarea>

  ${
    operation == 'edit'
      ? `<input type="hidden" value="${data._id}" id="taskId">`
      : ''
  }

  ${
    operation == 'edit'
      ? `<label for="taskCompletionStatus">Completed</label>
   <input type="checkbox" id="taskCompletionStatus" name="taskCompletionStatus" ${
     data.completed ? 'checked' : ''
   }>`
      : ''
  }
  <!-- Task Repeats --><!--
  <label for="taskRepeats">Would you like this event to repeat weekly?</label>
  <input type="checkbox" name="taskRepeats" id="taskRepeats">
  -->

  <button class="blue-button" type="submit">${operation[0].toUpperCase()}${operation.substring(
    1
  )} Task</button>
  </form>
  </div>
  </div>`;

  // Get the modal
  const modal = document.getElementById(`${operation}Task`);
  modal.addEventListener('submit', e => {
    e.preventDefault();
    addEditTask(operation);
  });
  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName('close')[0];
  // When the user clicks on the button, open the modal

  taskModal.style.display = 'block';

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    taskModal.style.display = 'none';
  };
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == taskModal) {
      taskModal.style.display = 'none';
    }
  };
}
