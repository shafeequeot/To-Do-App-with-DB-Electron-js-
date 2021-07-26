const { ipcRenderer, BrowserWindow } = require("electron");
const { promises } = require("fs");
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
  Db.db.all('SELECT * FROM todo ORDER BY id DESC',(err,row)=>{
    document.querySelector("ul").innerHTML = ""
    for (i=0; i<row.length; i++){
        
            let ul = document.querySelector('ul')
            let li = document.createElement('li');
         
            li.innerHTML = row[i].todo + "<span class='close' onClick='deleteMe(" + row[i].id + ")'>x</span>"
            ul.appendChild(li);

        // document.querySelector('.Lists').innerHTML = i+" " + row[i].todo + "<br/>" 
    }
    })
}


// delete the item when close button click

function deleteMe(value){
   
        
    ipcRenderer.send("deleteIt",value)
    
        // dialog.showMessageBox(win,options)

}