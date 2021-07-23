const { ipcRenderer } = require("electron");
const dbConfig = require("./Config/db")



document.querySelector(".btnSubmit").addEventListener("click",(event)=>{
    event.preventDefault();
    todoText = document.querySelector('.txtTodo').value;
    // console.log(todoText)
    document.querySelector('.txtTodo').value = "";
    
   ipcRenderer.send("newToDo",todoText)
});

fetchDB()
ipcRenderer.on("heyDBupdaated",(event,todoupdated)=>{
    fetchDB()
})

function fetchDB(){
const Db = new dbConfig()
 Db.db.all('SELECT * FROM todo',(err,row)=>{
     
    for (i=0; i<row.length; i++){
        document.querySelector('.Lists').innerHTML = i+" " + row[i].todo + "<br/>" 
    }
    })
}