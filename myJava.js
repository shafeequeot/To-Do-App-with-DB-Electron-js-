const { ipcRenderer, BrowserWindow, app, remote } = require("electron");
const { promises } = require("fs");
const dbConfig = require("./Config/db")
const sqlite3 = require('sqlite3')


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

 async function fetchDB(){
    

console.log("a1")
      Db = await  new dbConfig()
console.log(Db)
    
//      Db.db.exec('SELECT * FROM todo ORDER BY id DESC',(err,row)=>{
//         console.log("a3")
//        document.querySelector("ul").innerHTML = ""
//        console.log("a4")
//        for (i=0; i<row.length; i++){
//         console.log("a5")
//                let ul = document.querySelector('ul')
//                let li = document.createElement('li');
            
            //    li.innerHTML = row[i].todo + "<span class='close' onClick='deleteMe(" + row[i].id + ")'>x</span>"
            //    ul.appendChild(li);
   
          
       
//        }
// })

}


// delete the item when close button click

function deleteMe(value){
   
        
    ipcRenderer.send("deleteIt",value)
    
        // dialog.showMessageBox(win,options)

}

