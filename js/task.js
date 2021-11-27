let taskListElement = document.getElementById("task-list");

let taskList = [0,1,2,3];
let li = taskListElement;
taskList.forEach(task => {
  li.innerHTML +=
  `<li>Task here</li>`
})
// let ul = document.querySelector("ul");
// ul.innerHTML = '';
// taskList.forEach(
//       todoItem => {
//           ul.innerHTML +=
//               `<li>
//               <input type="checkbox" data-id="${todoItem.Id}" ${todoItem.Completed ? 'checked' : '' }>
//               <span>${ todoItem.Content }</span>
//               <button data-id="${todoItem.Id}"}>X</button>
//               </li>`;
//       }
//   );


// info="<input id=&#34;myBtn&#34; type=&#34;text&#34; id=&#34;content&#34; name=&#34;content&#34; placeholder=&#34;   + Add task&#34; readonly>"
// document.write(info)


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

// update the TaskHeader upon input "taskTitle" input
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



