let entry = document.getElementById("input");
let taskList = document.getElementById("taskList");
let myArray = [];

if(localStorage.getItem("taskEntry") === null){
    myArray = [];
} else {
    myArray = JSON.parse(localStorage.getItem("taskEntry"));
}

let myObj = {
    item: entry.value,
    id: Math.floor(Math.random()*100)
}

function deleteTask(){
    
    myArray = myArray.filter(function(item){
        return item.id != id;
    })  
    //let newArray = taskEntry.filter(taskEntry => taskEntry.id !== this.id);
    localStorage.setItem("taskEntry", JSON.stringify(myArray));
    deleteBtn.parentNode.remove();
}

function addTask(){
    
    let li = document.createElement('li');
    let inputValue = entry.value;
    if(inputValue === ""){
        alert('no value entered');
        return
    };
    
    li.innerHTML = inputValue;
    li.setAttribute('class', myObj.id);
    
    taskList.appendChild(li);

    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.setAttribute('class', 'dB');
    li.appendChild(deleteBtn);

    deleteBtn.onclick = function(){
        deleteTask(item.id);
    }


    li.setAttribute('id', myObj.id);
    deleteBtn.setAttribute('id', myObj.id);

    myArray.push(myObj);

    entry.value = "";

    let myObjString = JSON.stringify(myArray);
    localStorage.setItem("taskEntry", myObjString);
}

function clearBtn(){
    localStorage.removeItem("taskEntry");
    taskList.innerHTML = "";
    for(let i = 0; i <= myArray.length; i ++){
        myArray.pop();
    }
}

function showTasks(){
    for(let i = 0; i < myArray.length; i++){
        let li = document.createElement('li');

        li.innerHTML = myArray[i].item;
        taskList.appendChild(li);

        let deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'Delete';
        deleteBtn.setAttribute('class', 'dB');
        li.appendChild(deleteBtn);
    }
}

showTasks()