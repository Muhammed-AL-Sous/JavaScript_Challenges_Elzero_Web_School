let submit = document.querySelector(".add");
let results = document.querySelector(".tasks");

submit.onclick = function (e) {
  e.preventDefault();

  let inputInfo = document.querySelector(".input").value;

  if (inputInfo !== "") {
    let mainDiv = document.createElement("div");

    let span = document.createElement("span");
    let spanText = document.createTextNode(inputInfo);
    span.appendChild(spanText);
    mainDiv.appendChild(span);

    let button = document.createElement("button");
    button.textContent = "Delete";
    button.addEventListener("click", () => {
      mainDiv.remove(); // حذف العنصر من الواجهة
      let tasks = JSON.parse(window.localStorage.getItem("tasks")) || [];
      const taskIndex = tasks.indexOf(inputInfo);
      if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1); // حذف العنصر من localStorage
        window.localStorage.setItem("tasks", JSON.stringify(tasks));
      }
    });
    mainDiv.appendChild(button);

    results.appendChild(mainDiv);

    // Clear the input field after adding the task
    document.querySelector(".input").value = "";

    // Store the inputInfo in local storage
    let tasks = JSON.parse(window.localStorage.getItem("tasks")) || [];
    tasks.push(inputInfo);
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }
};

// استعادة العناصر من
// localStorage
// عند تحميل الصفحة
window.addEventListener("load", () => {
  let tasks = JSON.parse(window.localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => {
    let mainDiv = document.createElement("div");

    let span = document.createElement("span");
    let spanText = document.createTextNode(task);
    span.appendChild(spanText);
    mainDiv.appendChild(span);

    let button = document.createElement("button");
    button.textContent = "Delete";
    button.addEventListener("click", () => {
      mainDiv.remove(); // حذف العنصر من الواجهة
      let tasks = JSON.parse(window.localStorage.getItem("tasks")) || [];
      const taskIndex = tasks.indexOf(task);
      if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1); // حذف العنصر من localStorage
        window.localStorage.setItem("tasks", JSON.stringify(tasks));
      }
    });

    mainDiv.appendChild(button);

    results.appendChild(mainDiv);
  });
});
