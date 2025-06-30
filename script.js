
// Get references to input, button, and list
const emptymsg = document.getElementById('emptymsg');
const taskInput = document.getElementById('taskInput');
const addtaskbtn = document.getElementById('addtaskbtn');
const taskList = document.getElementById('taskList');

function saveTaskToStorage(){
    const tasks = [];

    taskList.querySelectorAll('li').forEach(li =>{
        tasks.push({
            text: li.childNodes[0].textContent.trim(),
            completed: li.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

addtaskbtn.addEventListener('click', function(){
    emptymsg.style.display='none';
    const taskText = taskInput.value.trim();

    if(taskText === ''){
        console.log("Empty list");
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
    ${taskText}
    <button class ="deletebtn">🗑️</button>
    `;

    taskList.appendChild(li);
    saveTaskToStorage();
    taskInput.value = '';

    li.addEventListener('click', function(){
        li.classList.toggle('completed');
        saveTaskToStorage();
    });

    li.querySelector('.deletebtn').addEventListener('click', function(){
    li.remove();
    saveTaskToStorage();
    if(taskList.children.length === 0){
        emptymsg.style.display ='block';
    }
});
});

taskInput.addEventListener('keydown', function(e)
{
    if (e.key === 'Enter'){
        addtaskbtn.click();
    }
});

window.addEventListener('load', function () {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  savedTasks.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${task.text}
      <button class="deleteBtn">🗑️</button>
    `;

    if (task.completed) {
      li.classList.add('completed');
    }

    // add event listeners again
    li.addEventListener('click', function () {
      li.classList.toggle('completed');
      saveTasksToStorage();
    });

    li.querySelector('.deleteBtn').addEventListener('click', function () {
      li.remove();
      if (taskList.children.length === 0) {
        emptyMsg.style.display = 'block';
      }
      saveTasksToStorage();
    });

    taskList.appendChild(li);
    emptyMsg.style.display = 'none';
  });
});
window.addEventListener('load', function(){
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    savedTasks.forEach(task => {
        const li = this.document.createElement('li');
        li.innerHTML =`
        ${task.text}
        <button class="deletebtn">🗑️</button>
        `;

      if (task.completed) {
      li.classList.add('completed');
    }

    // add event listeners again
    li.addEventListener('click', function () {
      li.classList.toggle('completed');
      saveTaskToStorage();
    });

    li.querySelector('.deleteBtn').addEventListener('click', function () {
      li.remove();
      if (taskList.children.length === 0) {
        emptymsg.style.display = 'block';
      }
      saveTaskToStorage();
    });

    taskList.appendChild(li);
    emptymsg.style.display = 'none';
    });
});
