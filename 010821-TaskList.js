const taskForm  = document.getElementById("task-form");
const newTask   = document.getElementById("new-task");
const filtTask  = document.getElementById("filter-tasks");
const taskList  = document.getElementById("task-list");
const clearBtn  = document.getElementById("clear-tasks");

loadEventListeners();

//Load all event listeners
function loadEventListeners(){
    document.addEventListener("DOMContentLoaded", showAll);
    taskForm.addEventListener("submit", addTask);
    filtTask.addEventListener("keyup" , filterTasks);
    taskList.addEventListener("click" , deleteTask);
    clearBtn.addEventListener("click" , clearAll);
}

//Get all tasks from local storage
function getTasks(){
    let tasks = localStorage.getItem("tasks");
    if(tasks === null){
        return [];
    } else{
        return tasks.split(",");
    }
}

//Show all tasks
function showAll(){
    let tasks = getTasks();
    for(var task of tasks){
        //Create new item for each task
        const item = document.createElement("li");
        item.className = "collection-item";
        item.appendChild(document.createTextNode(task));
        //Make delete x
        const x = document.createElement("a");
        x.className = "delete-item secondary-content"; 
        x.innerHTML = "<i class='fa fa-remove' style='color:teal'></i>";
        //Append delete x to item
        item.appendChild(x);
        taskList.appendChild(item);
    }
}

//Add Task
function addTask(){
    let task = newTask.value;
    newTask.value = "";
    if(task.trim().length === 0) {
        alert("Please add a non-empty task.");
    } else{
        //Store new task in local storage
        let tasks = getTasks();
        tasks.push(task);
        localStorage.setItem("tasks", tasks);
        //Show updated task list
        showAll();
    }
}

//Filter tasks
function filterTasks(e){
    let filter = e.target.value.toLocaleLowerCase();
    let items = document.querySelectorAll(".collection-item");
    for(var item of items){
        let task = item.firstChild.textContent;
        if(task.includes(filter)){
            item.style.display = "block";
        } else{
            item.style.display = "none";
        }
    }
}

//Delete a task
function deleteTask(e) {
    let item = e.target.parentElement;
    if(item.classList.contains('delete-item')){
        if(confirm('Do you want to delete this task?')){
            item.parentElement.remove();
            let tasks = getTasks();
            tasks.splice(tasks.indexOf(item.parentElement), 1);
            localStorage.setItem("tasks", tasks);
        }
    }
}

//Clear all tasks
function clearAll(){
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    localStorage.clear();
}
