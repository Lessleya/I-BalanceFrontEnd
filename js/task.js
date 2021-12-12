import { getParam } from './utils.js';
import { createModal } from './task-modal.js';
import { DataService } from './dataservice.js';

const category = getParam('category');

window.addEventListener('load', () => {
  processTasks(category ? `category-tasks/${category}` : 'daily-tasks');
});

export async function processTasks(endpoint) {
  const taskList = (await DataService.get(endpoint)).task;

  const ul = document.getElementById('task-list');
  ul.innerHTML = '';

  taskList.forEach(task => {
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
        <input type=hidden value="${task._id}">
        <button type=submit value="Delete">X</button>
      </form>
    </li>`; // how should the user see time?
  });

  const taskForms = document.querySelectorAll('.getTaskId');
  taskForms.forEach(taskForm => {
    taskForm.addEventListener(
      'submit',
      e => {
        e.preventDefault();
        handleEditDelete(taskForm);
      },
      true
    );

    // Overrides click eventListener on li
    // Stops event from getting to li then triggers submit event for whichever button was pressed
    taskForm.querySelector('button').addEventListener(
      'click',
      e => {
        e.preventDefault();
        e.stopPropagation();
        taskForm.dispatchEvent(new Event('submit'));
      },
      true
    );
  });

  const taskLis = document.querySelectorAll('.liClickEdit');
  taskLis.forEach(taskLi => {
    const taskForm = taskLi.querySelector('.editTask');
    taskLi.addEventListener(
      'click',
      e => {
        e.preventDefault();
        handleEditDelete(taskForm);
      },
      false
    );
  });
}

function handleEditDelete(taskForm) {
  const taskId = taskForm.querySelector('input').value;
  const operation = taskForm.querySelector('button').value;

  if (operation == 'Delete') {
    DataService.post({ taskId: taskId }, 'delete-task').then(data => {
      processTasks(category ? `category-tasks/${category}` : 'daily-tasks');
    });
  } else if (operation == 'Edit') {
    let data = {
      _id: taskForm.querySelector('input[name="taskId"]').value,
      title: taskForm.querySelector('input[name="taskTitle"]').value,
      category: taskForm.querySelector('input[name="taskCategory"]').value,
      date: new Date(taskForm.querySelector('input[name="taskDate"]').value),
      completed:
        taskForm.querySelector('input[name="taskCompleted"]').value == 'true',
      notes: taskForm.querySelector('input[name="taskNotes"]').value,
    };
    const offset = new Date().getTimezoneOffset() * 60000;
    data.date = new Date(data.date - offset).toISOString().slice(0, -1);
    createModal('edit', data);
    document.querySelector('#editTask').addEventListener('submit', e => {
      e.preventDefault(); // prevent reload on submission
      addEditTask('edit');
    });
  }
}

export async function addEditTask(type) {
  const data = {
    taskTitle: document.getElementById('taskTitle').value,
    taskCategory: document.getElementById('taskCategory').value,
    taskDate: new Date(document.getElementById('taskDate').value).getTime(),
    taskNotes: document.getElementById('taskNotes').value,
  };

  if (type == 'edit') {
    data['taskId'] = document.getElementById('taskId').value;
    data['taskCompletionStatus'] = document.getElementById(
      'taskCompletionStatus'
    ).checked;
  }

  const modal = document.getElementById('taskModal');
  modal.style.display = 'none';
  
  if (type == 'add') {
    await DataService.post(data, 'add-task')
  } else if (type == 'edit') {
    await DataService.post(data, 'edit-task')
  }

  // getTasks();
  processTasks(category ? `category-tasks/${category}` : 'daily-tasks');
  // hides modal
  // CLEAR DATA
  document.getElementById(`${type}Task`).reset();
}
