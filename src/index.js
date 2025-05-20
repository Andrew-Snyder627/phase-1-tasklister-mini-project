document.addEventListener("DOMContentLoaded", () => {
  // console.log("JS LOADED");
  // your code here
  const form = document.getElementById("create-task-form");
  const input = document.getElementById("new-task-description");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Avoid page refresh

    const taskInput = input.value;
    // console.log("Task Input: ", taskInput);
    buildToDo(taskInput);
    form.reset(); // Clear input after submission
  });

  function buildToDo(task) {
    const li = document.createElement("li");
    li.textContent = task;
    document.getElementById("tasks").appendChild(li);
    // console.log("Append new task: ", li);
  }
});
