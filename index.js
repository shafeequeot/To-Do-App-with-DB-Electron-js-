const { BrowserWindow, app, ipcMain, ipcRenderer, webContents, dialog } = require("electron");

let win;
const  dataBase  = require('./Config/db') 
// dbConfig = new dataBase()



let todoupdated = 'todo';

app.whenReady().then(() => {
  
    createWindow()
  
    
  })

  function createWindow () {
     win = new BrowserWindow({
      
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
      }
     
       
      
    })
    //win.maximize()
    const a = win.loadFile('index.html')

    
    
    
  }

  ipcMain.on('newToDo',(Event,value)=>{
   dbConfig.db.exec(`INSERT INTO "todo" ("todo") VALUES ("${value}")`)
   
 
  win.webContents.send('heyDBupdaated',todoupdated)

   
  })
    

  // delete the item 
  // sql query not running seccessfully

  ipcMain.on('deleteIt',(event,value2)=>{

    dialog.showMessageBox({
      title: `Delete? `,
      message: `are you sure to Delete?`,
      detail: `delete this item`,
      buttons: ["Yes","No"],
      type: 'question'
     }).then(result=>{
       if(result.response == '0'){
         
        dbConfig.db.exec(`DELETE FROM "todo" WHERE ID = ${value2}`,resp=>{
          if (resp){

            console.log(resp)
          }
        })
                
        win.webContents.send('heyDBupdaated',todoupdated)
       }else{
         console.log("you pressed dont delete")
         
       }
       
     })
  })
 
 
 