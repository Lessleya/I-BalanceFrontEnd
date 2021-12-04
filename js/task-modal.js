function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}



/* Set category = ?category*/
let category = getParam("category")
// Create the form modal using javascript
console.log("begin modal work")
let taskModal = document.getElementById('myModal');
taskModal.innerHTML = `<div class="modal-content">
<div class="modal-header">
<span class="close">&times;</span>
<h2>Add Task</h2>
</div>
<div class="modal-body">
<!-- add task - Form -->
<form id="addNewTask">
<h1 class="default-input-style" id=taskHeader>Title</h1>
<!-- Task Title -->
<label for="taskTitle">Title</label>
<input type="text" name="taskTitle" id="taskTitle">

<!-- Task Category -->
<label for="taskCategory">Category</label>
<input type="text" name="taskCategory" id="taskCategory" value=${category} readonly>

<label for="taskDate">Date</label>
<input type="datetime-local" name="taskDate" id="taskDate">


<!--
<label for="taskDate">Date</label>
<input type="date" name="taskDate" id="taskDate">
<label for="taskTime">Time</label>
<input type="time" name="taskTime" id="taskTime">
-->

<!-- Task Description -->
<label for="taskNotes">Notes</label>
<textarea id="taskNotes" name="taskNotes"></textarea>

<!-- Task Repeats -->
<label for="taskRepeats">Would you like this event to repeat weekly?</label>
<input type="checkbox" name="taskRepeats" id="taskRepeats">


<button class="blue-button" type="submit">Add Task</button>
</form>
</div>
</div>`

// Add-task Modal

// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function () {
  console.log('qw')
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Changing header based off title user input
document.getElementById('taskTitle').addEventListener('input', updateTaskHeader); // add event listener
/* update the TaskHeader upon input "taskTitle" input */

function updateTaskHeader() {
  taskHeader.classList.add("default-input-style"); // add a gray default style text
  // if empty change the value of input to "Title"
  if (document.getElementById('taskTitle').value == "") {
    taskHeader.innerText = "Title";
  } else { // remove default style, uppercase first letter, update header for every input in the title
    taskHeader.classList.remove("default-input-style");
    let title = document.getElementById('taskTitle').value;
    let workingTitle = title[0].toUpperCase() + title.substring(1) // handles uppercase first letter
    taskHeader.innerText = workingTitle;
    
  }
}