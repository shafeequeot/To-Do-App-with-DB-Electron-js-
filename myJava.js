const { ipcRenderer } = require("electron");



document.querySelector(".btnSubmit").addEventListener("click",(event)=>{
    event.preventDefault();
    todoText = document.querySelector('.txtTodo').value;
    // console.log(todoText)
    document.querySelector('.txtTodo').value = "";
    
   ipcRenderer.send("newToDo",todoText)
});


