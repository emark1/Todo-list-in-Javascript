
let unorderedTaskList = document.getElementById("unorderedTaskList")
//let taskList = document.getElementById("taskList")
let btnAddTask = document.getElementById("btnAddTask")
let taskTextBox = document.getElementById("taskTextBox")
let completedTaskList = document.getElementById("completedTaskList")


let tasks = []

//Add button and related functions
btnAddTask.addEventListener('click',function(){
    console.log(document.getElementById("taskTextBox").value)

    //
    let taskName = taskTextBox.value
    let taskElement = document.createElement("li")

    //Delete button:
    let deleteButton = document.createElement("button")
    deleteButton.innerHTML = "Remove task"

    //Style the button:
    deleteButton.className = "button-style"

    //Delete button function:
    deleteButton.addEventListener('click',function(){
        unorderedTaskList.removeChild(this.parentElement)
        completedTaskList.removeChild(this.parentElement)
        //unorderedTaskList.removeChild(itemElement)
        
    })

    //Checkbox
    let checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.addEventListener('input',function(){
        unorderedTaskList.removeChild(taskElement)
        completedTaskList.appendChild(taskElement)
    })

    taskElement.innerHTML = taskName   
    taskElement.appendChild(checkbox)
    unorderedTaskList.appendChild(taskElement)
    taskElement.appendChild(deleteButton)
    tasks.push(taskName)

})
