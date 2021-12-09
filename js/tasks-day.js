import { getParam } from './utils.js'
import {DataService} from './dataservice.js'

window.addEventListener("load", processTasks);

async function processTasks() {
    const category = getParam("category");
    const taskList = await DataService.get("daily-tasks");

    let categoryTaskList = taskList["task"].filter((task) => {
        return task.category == category;
    });

    const ul = document.getElementById("task-list");
    ul.innerHTML = "";

    categoryTaskList.forEach((task) => {
        // for each item recieved from the server, produce content
        ul.innerHTML += `<li class="liClickEdit">
      <form class="editTask getTaskId">
        <h2 class="task_title">${task.title}</h2>
        <input type=hidden name="taskId" value="${task._id}">
        <input type=hidden name="taskTitle" value="${task.title}">
        <input type=hidden name="taskCategory" value="${task.category}">
        <input type=hidden name="taskDate" value="${task.date}">
        <input type=hidden name="taskCompleted" value="${task.completed}">
        <input type=hidden name="taskNotes" value="${task.notes}">
        <button type=submit value="Edit">E</button>
      </form>
      <form class="deleteTask getTaskId">
        <input type=hidden name="taskName" value="${task._id}">
        <button type=submit value="Delete">D</button>
      </form>
    </li>`; // how should the user see time?
    });
}