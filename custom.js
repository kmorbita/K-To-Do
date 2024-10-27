// let tasks = [];
let html = document.getElementById("content");
let taskList = [];
document.getElementById("message").style.display = "none";

function getInput(event) {
    let content = document.getElementById("content");
    if (event.key == "Enter") {
        let input = document.getElementById("task-input");
        if (input.value.trim() != null && input.value.trim() != "") {
            taskList.push({
                status: "active",
                task: input.value.trim()
            })
            localStorage.setItem("tasks", JSON.stringify(taskList));
            content.innerHTML = loopElements(taskList);
        } else {
            alert("Please input a task.");
        }
        input.value = null;
    }
}

function initializePage() {
    let content = document.getElementById("content");
    content.innerHTML = "";
    let list = JSON.parse(localStorage.getItem("tasks"));
    list == null ? "" : taskList = list;
    content.innerHTML = loopElements(taskList);
    console.log(taskList)
}

function deleteTask(index) {
    let content = document.getElementById("content");
    content.innerHTML = "";

    taskList.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    content.innerHTML = loopElements(taskList);
}

function loopElements(list) {
    let display = document.getElementById("message").style.display
    display = "none";
    let text = "";
    if (list != null) {
        
        for (let i = 0; i < list.length; i++) {
            text += '<div class="content">';
            text += '<span>' + list[i]['task'] + '</span>';
            text += "<button type='button' onclick='deleteTask(" + i + ")'>Del</button>";
            text += '</div>';
        }
    }else{
        display = "";
    }
    return text;
}