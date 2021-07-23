const { BrowserWindow, app, ipcMain, ipcRenderer } = require("electron");

let MainPage;
const  dataBase  = require('./Config/db') 
dbConfig = new dataBase()

result  = dbConfig.db.get('SELECT * FROM todo ')

 console.log(result)
//  
// database connection start


// database connection end



app.whenReady().then(() => {
  
    createWindow()
    
  })

  function createWindow () {
    const win = new BrowserWindow({
      
        webPreferences: {
       
          nodeIntegration: true,
          contextIsolation: false,
      }
      
    })
    //win.maximize()
    win.loadFile('index.html')
  }

  ipcMain.on('newToDo',(Event,value)=>{
   console.log(value)
   dbConfig.db.exec(`INSERT INTO "todo" ("todo") VALUES ("${value}")`)
  })