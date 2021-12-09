import { addEditTask } from './dailytask.js';

function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

var btn = document.getElementById('myBtn');

btn.onclick = function () {
  var modal = document.getElementById('myModal');
  createModal('add', null);
  modal.style.display = 'block';
};

export function createModal(operation, data) {
  /* Set category = ?category*/
  let category;
  if (operation == 'add') {
    category = getParam('category');
  } else if (operation == 'edit') {
    category = data.category;
  }

  // Create the form modal using javascript
  let taskModal = document.getElementById('myModal');
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


  <!--
  <label for="taskDate">Date</label>
  <input type="date" name="taskDate" id="taskDate">
  <label for="taskTime">Time</label>
  <input type="time" name="taskTime" id="taskTime">
  -->

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

  // Add-task Modal

  // Get the modal
  var modal = document.getElementById('myModal');
  // Get the button that opens the modal

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName('close')[0];
  // When the user clicks on the button, open the modal
  if (operation == 'edit') {
    modal.style.display = 'block';
  }
  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = 'none';
  };
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };

  if (operation == 'add') {
    // Event Listeners
    document.querySelector('#addTask').addEventListener('submit', e => {
      e.preventDefault(); // prevent reload on submission
      addEditTask('add');
    }); // add task submit button
  }
}

/* I have no idea what this does and it's not affecting
 anything as far as I can tell so I'm commenting it out
 cause its giving an error.

// Changing header based off title user input
document
  .getElementById('taskTitle')
  .addEventListener('input', updateTaskHeader); // add event listener
/* update the TaskHeader upon input "taskTitle" input */


/* see earlier comment 


function updateTaskHeader() {
  taskHeader.classList.add('default-input-style'); // add a gray default style text
  // if empty change the value of input to "Title"
  if (document.getElementById('taskTitle').value == '') {
    taskHeader.innerText = 'Title';
  } else {
    // remove default style, uppercase first letter, update header for every input in the title
    taskHeader.classList.remove('default-input-style');
    let title = document.getElementById('taskTitle').value;
    let workingTitle = title[0].toUpperCase() + title.substring(1); // handles uppercase first letter
    taskHeader.innerText = workingTitle;
  }
}
*/