window.addEventListener("load", processTasks);


/* Get query info (category) */
function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}
/* Set category = ?category*/
// let category = getParam("category")

async function processTasks() {
  let taskList = await getTasks()
  console.log("in process tasks")
  console.log(taskList);
  categoryTaskList = taskList['task'].filter(function (task) {
    return task.category == category;
  })
  
  console.log(categoryTaskList)
  

  let ul = document.getElementById("task-list");
  ul.innerHTML = "";
  categoryTaskList.forEach(task => { // for each item recieved from the server, produce content
    ul.innerHTML +=
    `<li>${task.title}</li><form class="editTask getTaskId"><input type=hidden name="taskName" value="${task._id}"><button type=submit value="Edit">E</button></form><form class="deleteTask getTaskId"><input type=hidden name="taskName" value="${task._id}"><button type=submit value="Delete">D</button></form>` // how should the user see time?
  })
  


  // Array.from(htmlCollection);
  let deleteTaskForm = (document.getElementsByClassName('getTaskId'));
  for(let i=0;i<deleteTaskForm.length;i++){
    console.log(deleteTaskForm[i]);
    deleteTaskForm[i].addEventListener('submit', async (e) => {
      e.preventDefault();
      let taskId = (deleteTaskForm[i].querySelector("input[name='taskName']").value);
      let operation = deleteTaskForm[i].querySelector("button").value;
      console.log(operation);
      console.log(deleteTaskForm[i])
      if(operation == "Delete"){
        let csrf = await DataService.getCsrfToken();
        let data = {_csrf: csrf, taskId: taskId}
        let success = await DataService.post(data, "delete-task");
        console.log(success)
      }
      })
  }
  




  console.log('done with process tasks')
}

function getTasks() {
  console.log("in get tasks")
  let taskList = DataService.get('daily-tasks');
  return taskList
  
}

// Event Listeners
document.querySelector('#addNewTask').addEventListener('submit', addTask) // add task submit button

async function addTask(e) {
  e.preventDefault(); // prevent reload on submission

  const _csrf = await DataService.getCsrfToken() // get csrf
  const data = {
    taskTitle: document.getElementById('taskTitle').value,
    taskCategory: document.getElementById('taskCategory').value,
    taskDueDate: document.getElementById('taskDate').value,
    taskNotes: document.getElementById('taskNotes').value,
    taskRepeats: document.getElementById('taskRepeats').value,
    _csrf: _csrf
  }
  await DataService.post(data, "add-task")
  .then(async res => {
    console.log(await res);
    // getTasks();
    processTasks();
      // hides modal
      modal.style.display = "none";
      // CLEAR DATA
      document.getElementById("addNewTask").reset();
    })
  }


