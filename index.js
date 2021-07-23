const { BrowserWindow, app, ipcMain, ipcRenderer, webContents } = require("electron");

let win;
const  dataBase  = require('./Config/db') 
dbConfig = new dataBase()





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
    win.loadFile('index.html')
  }

  ipcMain.on('newToDo',(Event,value)=>{
   dbConfig.db.exec(`INSERT INTO "todo" ("todo") VALUES ("${value}")`)
   
   let todoupdated = 'todo';
  win.webContents.send('heyDBupdaated',todoupdated)

   
  })
    
  
 
  