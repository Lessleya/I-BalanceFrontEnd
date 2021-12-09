import { processTasks } from './task.js'
import { DataService } from './dataservice.js';

export async function addEditTask(type) {
    const data = {
        taskTitle: document.getElementById("taskTitle").value,
        taskCategory: document.getElementById("taskCategory").value,
        taskDate: document.getElementById("taskDate").value,
        taskNotes: document.getElementById("taskNotes").value,
    };
    if (type == "edit") {
        data["taskId"] = document.getElementById("taskId").value;
        data["taskCompletionStatus"] = document.getElementById(
            "taskCompletionStatus"
        ).checked;
        console.log(data);
    }

    var modal = document.getElementById("myModal");

    if (type == "add") {
        await DataService.post(data, "add-task").then(async(res) => {
            console.log(await res);
        });
    } else if (type == "edit") {
        await DataService.post(data, "edit-task").then(async(res) => {
            console.log(await res);
        });
    }
    // getTasks();
    processTasks();
    // hides modal
    modal.style.display = "none";
    // CLEAR DATA
    document.getElementById(`${type}Task`).reset();
}