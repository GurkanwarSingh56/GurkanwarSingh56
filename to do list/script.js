const inputBox = document.getElementById("task"); 
const addBtn = document.getElementById("button");
const deleteBtn = document.getElementById("delete");

function addTask() {
  const userTask = inputBox.value;
  if (userTask) {
    const task = document.createElement("li");

    // Create a checkbox input element
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        task.style.textDecoration = "line-through";
        
      } else {
        task.style.textDecoration = "none";
      }
    });

    task.appendChild(checkbox);

     const taskText = document.createElement("span");
    taskText.innerHTML = userTask;
    task.appendChild(taskText);

    // Style the task
    task.style.border = "1px solid #ddd";
    task.style.padding = "10px";
    task.style.margin = "5px 0";
    task.style.borderRadius = "5px";
    task.style.transition = "background-color 0.3s ease";
    // task.addEventListener("mouseover", () => {
      // task.style.backgroundColor = "#f9f9f9";
    // });
    task.addEventListener("mouseout", () => {
      task.style.backgroundColor = "#000000";
    });

    document.getElementById("tasks").appendChild(task);
    inputBox.value = "";
  } else {
    alert("Please enter a task");
  }
}

addBtn.addEventListener("click", addTask); 

function deleteTask() {
  const tasks = document.getElementById("tasks");
  tasks.removeChild(tasks.lastElementChild);
}

deleteBtn.addEventListener("click", deleteTask);