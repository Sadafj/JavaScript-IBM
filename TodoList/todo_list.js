const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

let tasks = [];

// Add Task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = "";
        displayTasks();
    }
}

// Display Tasks
function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>
        `;

        // Checkbox event
        li.querySelector("input").addEventListener("change", () => toggleTask(index));

        taskList.appendChild(li);
    });
}

// Toggle Completed State
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

// Clear Completed Tasks
function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

// Event Listeners (Correct position)
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
