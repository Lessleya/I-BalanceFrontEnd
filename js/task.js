import {addEditTask} from './dailytask.js';
import { getParam } from './utils.js'
import {createModal} from './task-modal.js'

window.addEventListener("load", processTasks);

export async function processTasks() {
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
        <input  type=hidden name="taskId" value="${task._id}">
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

    const taskForms = document.querySelectorAll(".getTaskId");
    taskForms.forEach((taskForm) => {
        taskForm.addEventListener(
            "submit",
            (e) => {
                e.preventDefault();
                handleEditDelete(taskForm);
            },
            true
        );

        // Overrides click eventListener on li
        // Stops event from getting to li then triggers submit event for whichever button was pressed
        taskForm.querySelector("button").addEventListener(
            "click",
            (e) => {
                e.preventDefault();
                e.stopPropagation();
                taskForm.dispatchEvent(new Event("submit"));
            },
            true
        );
    });

    const taskLis = document.querySelectorAll(".liClickEdit");
    taskLis.forEach((taskLi) => {
        const taskForm = taskLi.querySelector(".editTask");
        taskLi.addEventListener(
            "click",
            (e) => {
                e.preventDefault();
                console.log("fromLi");
                handleEditDelete(taskForm);
            },
            false
        );
    });
}

async function handleEditDelete(taskForm) {
    const taskId = taskForm.querySelector("input").value;
    const operation = taskForm.querySelector("button").value;

    if (operation == "Delete") {
        let success = await DataService.post({ taskId: taskId }, "delete-task");
        console.log(success);
        processTasks();
    } else if (operation == "Edit") {
        let data = {
            _id: taskForm.querySelector('input[name="taskId"]').value,
            title: taskForm.querySelector('input[name="taskTitle"]').value,
            category: taskForm.querySelector('input[name="taskCategory"]').value,
            date: taskForm.querySelector('input[name="taskDate"]').value,
            completed: taskForm.querySelector('input[name="taskCompleted"]').value == "true",
            notes: taskForm.querySelector('input[name="taskNotes"]').value,
        };
        data.date = data.date.substring(0, data.date.length - 2);
        createModal("edit", data);
        document.querySelector("#editTask").addEventListener("submit", (e) => {
            e.preventDefault(); // prevent reload on submission
            addEditTask("edit");
        });
    }
}