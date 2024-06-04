let tasks = [
    {
        id: 1, task: "Read a new book", completed: false
    },
    {
        id: 2, task: "Go to market", completed: false
    },
];

function readAll(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
    var datatable = document.querySelector(".data_table");
    var storedTasks = localStorage.getItem("tasks");
    var taskList = JSON.parse(storedTasks);
    var elements = "";

    taskList.map(record => (
        elements += `
<tr>
    <td><input type="checkbox" ${record.completed ? 'checked' : ''} onclick="toggleComplete(${record.id})"></td>
    <td style="text-decoration: ${record.completed ? 'line-through' : 'none'}">${record.task}</td>
    <td>
        <button class="edit" onclick="editTask(${record.id})"><a href="#"><i class="fa-solid fa-pen-to-square"></i></a></button>
        <button class="delete" onclick="deleteTask(${record.id})"><a href="#"><i class="fa-solid fa-trash"></i></a></button>
    </td>
</tr>
`
    ));
    datatable.innerHTML = elements;
}

function showCreateForm(){
    document.querySelector(".create-form").style.display = "block";
    document.querySelector(".add").style.display = "none";
}

function addTask(){
    var task = document.querySelector(".task").value;
    if (task.trim() === "") {
        alert("Please enter a task.");
        return;
    }
    var newTask = {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        task: task,
        completed: false
    };

    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    document.querySelector(".create-form").style.display = "none";
    document.querySelector(".add").style.display = "block";

    readAll();
}

function editTask(id){
    document.querySelector(".update-form").style.display = "block";

    var taskObj = tasks.find(rec => rec.id === id);
    document.querySelector(".utask").value = taskObj.task;
    document.querySelector(".id").value = taskObj.id;
}

function updateTask(){
    var id = parseInt(document.querySelector(".id").value);
    var task = document.querySelector(".utask").value;
    var index = tasks.findIndex(rec => rec.id === id);
    
    tasks[index] = {id, task, completed: tasks[index].completed};
    localStorage.setItem("tasks", JSON.stringify(tasks));
    readAll();
    document.querySelector(".update-form").style.display = "none";
}

function deleteTask(id){
    tasks = tasks.filter(rec => rec.id !== id);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    readAll();
}

function toggleComplete(id){
    var index = tasks.findIndex(rec => rec.id === id);
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    readAll();
}

document.addEventListener("DOMContentLoaded", function() {
    if(localStorage.getItem("tasks")) {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    readAll();
});
