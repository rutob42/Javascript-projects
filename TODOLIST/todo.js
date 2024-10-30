function addTask(){
    var userinput = document.getElementById('taskinput').value;
    if(userinput === ''){
        alert("User input cannot be empty");
    }
    else{
        var taskList = document.getElementById('tasklist');
        var listItem = document.createElement('li');

        listItem.textContent = userinput;
        taskList.appendChild(listItem);

        //clear the input field
    }
}

function deleteItem(){
    var taskList = document.getElementById('tasklist');
    if(taskList.hasChildNodes()){
        taskList.removeChild(taskList.lastChild)
    }
    else{
        alert("No tasks to delete")
    }
}
