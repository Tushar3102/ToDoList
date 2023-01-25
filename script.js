let taskText = document.querySelector("#task-text");
let btnAddTask = document.querySelector("#btnAdd");
let taskList = document.querySelector(".task-list");

btnAddTask.addEventListener("click", addTask);

taskText.addEventListener("keyup", function (e) {
    if (e.key == "Enter") {
        addTask();
    }
})
function addTask() {
    if (taskText.value == "") {
        taskText.setAttribute("placeholder", "Please enter something")
    } else {
        // creating elements
        taskText.removeAttribute("autofocus")
        let liElement = document.createElement("li");
        let spanElement = document.createElement("span");
        let deleteElement = document.createElement("i");
        let editElement = document.createElement("i");
        // adding classes to elements
        spanElement.classList.add("task");
        deleteElement.classList.add("fa-solid", "fa-trash", "btn-delete");
        editElement.classList.add("fa-solid", "fa-pen-to-square", "btn-edit");
        //add text into span element
        spanElement.innerHTML = taskText.value;
        //binding togethe all elements
        taskList.appendChild(liElement);
        liElement.appendChild(spanElement);
        liElement.appendChild(deleteElement);
        liElement.appendChild(editElement);

        //checking if the task is done or not
        spanElement.addEventListener("click", function (param) {
            if (spanElement.classList.contains("strike") == true) {
                spanElement.classList.remove("strike")
                spanElement.style.color = "rgba(175,126,234,1.0)"
            } else {
                spanElement.classList.add("strike")
                spanElement.style.color = "rgba(175, 126, 234, 0.5)"
            }
        })

        //working of delelte button
        deleteElement.addEventListener("click", deletetask)

        //working of edit task button
        editElement.addEventListener("click", edittask)

        taskText.value = "";
    }
}


//delte task function
function deletetask(e) {
    e.target.parentElement.remove();
}

//edit task function

function edittask(e) {
    taskText.value = e.target.parentElement.children[0].innerHTML
    deletetask(e);
}