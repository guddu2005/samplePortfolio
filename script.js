function addTask(){
    let input=document.getElementById('taskInput');
    let taskText = input.value.trim();

    if(taskText===""){
        alert("task Cannot be empty!");
        return;
    }
    let li=document.createElement('li');
    li.className="task";
    li.innerHTML=`<span>${taskText}</span>
                <button onClick="markDone(this)" >done</button>
                <button onClick="deleteTask(this)">delete</button>`;

    document.getElementById('taskList').appendChild(li);
    input.value='';//clear input value
}

function markDone(button){
    let task=button.parentElement.firstChild;
    task.classList.toggle('done');
}

function deleteTask(button){
    let li=button.parentElement;
    li.remove();
}

function allClear(){
    document.getElementById('taskList').innerHTML='';
}

addTask();

console("JavaScript is working");