let entry = document.getElementById("input");
let taskList = document.getElementById("taskList");

function addTask(){
    let li = document.createElement('li');
    li.innerHTML = entry.value;
    entry.value = "";

    taskList.appendChild(li);

    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.setAttribute('id','dB');
    li.appendChild(deleteBtn);
}