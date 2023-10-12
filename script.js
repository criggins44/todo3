let entry = document.getElementById("input");
let taskList = document.getElementById("taskList");
let myArray = [];

if(localStorage.getItem("taskEntry") === null){
    myArray = [];
} else {
    myArray = JSON.parse(localStorage.getItem("taskEntry"));
}

function removeItem(){
    this.parentNode.remove();
}

function addTask(){
    let li = document.createElement('li');
    li.innerHTML = entry.value;
    

    taskList.appendChild(li);

    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.setAttribute('id','dB');
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", removeItem)



    let myObj = {
        item: entry.value,
        id: Math.floor(Math.random()*100)
    }

    myArray.push(myObj);

    entry.value = "";

    let myObjString = JSON.stringify(myArray);
    localStorage.setItem("taskEntry", myObjString);
}

function clearBtn(){
    localStorage.removeItem("taskEntry");
    taskList.innerHTML = "";
}