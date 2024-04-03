const addTask = () => {
    const taskInput = document.getElementById("taskInput")
    const taskList = document.getElementById("taskList")
    const taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      const taskItem = document.createElement("li")
      taskItem.textContent = taskText;
      
      const deleteButton = document.createElement("button")
      deleteButton.textContent = "🗑️"
      deleteButton.onclick = () => {
        taskList.removeChild(taskItem);
      };
  
      taskItem.appendChild(deleteButton)
      taskList.appendChild(taskItem)
      taskInput.value = ""
    }
  }
  