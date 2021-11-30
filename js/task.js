/* Create the form modal using javascript */
let taskModel = document.getElementById('myModal');
taskModel.innerHTML = `<div class="modal-content">
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
        <input type="text" name="taskCategory" id="taskCategory">

        <label for="taskDate">Date</label>
        <input type="date" name="taskDate" id="taskDate">
        <label for="taskTime">Time</label>
        <input type="time" name="taskTime" id="taskTime">

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

/* Event Listeners */
document.querySelector('#addNewTask').addEventListener('submit', addTask) // add task submit button

/* Upon clicking the add task button, grab the csrf token, send post data as json object to backend*/
async function addTask(e){
  e.preventDefault(); // prevent reload on submission
  const _csrf = await DataService.getCsrfToken() // get csrf
  const login = {email:"test8@test.com",password:"asdfasdf",_csrf:_csrf} // base user
  await DataService.post(login, "login")
  .then(async res => {
    console.log(await res)
  })
  // send the info as "data"
  const data = {taskTitle:document.getElementById('taskTitle').value, taskCategory:document.getElementById('taskCategory').value, taskDueDate:document.getElementById('taskDate').value, taskNotes:document.getElementById('taskNotes').value, taskRepeats:document.getElementById('taskRepeats').value,  _csrf:_csrf}
  await DataService.post(data, "add-task")
  .then(async res => {
    console.log(await res)
  })
}




/* */
// await DataService.get(tasks, "tasks")
//   .then(async res => {
//     console.log(await res)
//   })

// res.task comes back as an array of tasks
// const listOfTasks = JSON.parse(res.task)
// console.log(listOfTasks)
// filter tasks by category

// output list items by tasks

// display list item title, along with edit button, complete button, and delete button

/* Task List */

let taskListElement = document.getElementById("task-list");
let taskList = [0,1,2,3];
let li = taskListElement;
taskList.forEach(task => { // for each item recieved from the server, produce content
  li.innerHTML +=
  `<li>Task here</li>`
})














/* Add-task Modal */

// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// Changing header based off title user input
document.getElementById('taskTitle').addEventListener('input', updateTaskHeader); // add event listener
/* update the TaskHeader upon input "taskTitle" input */
function updateTaskHeader(){
  taskHeader.classList.add("default-input-style"); // add a gray default style text
  // if empty change the value of input to "Title"
  if (document.getElementById('taskTitle').value == ""){ 
    taskHeader.innerText = "Title";
  }
  else{ // remove default style, uppercase first letter, update header for every input in the title
    taskHeader.classList.remove("default-input-style");
    let title = document.getElementById('taskTitle').value;
    let workingTitle = title[0].toUpperCase() + title.substring(1) // handles uppercase first letter
    taskHeader.innerText = workingTitle;
  }
}



