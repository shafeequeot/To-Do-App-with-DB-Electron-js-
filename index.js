const { BrowserWindow, app, ipcMain, ipcRenderer, webContents, dialog } = require("electron");
const path = require('path')
const fs = require('fs-extra')
let win;
const dataBase = require('./Config/dbPath');

// dbConfig = new dataBase()



let todoupdated = 'todo';

app.whenReady().then(() => {

  createWindow()


})

function createWindow() {
  win = new BrowserWindow({

    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableremotemodule: true,
    }



  })
  //win.maximize()
  const a = win.loadFile('index.html')




}

ipcMain.on('newToDo', (Event, value) => {

  dataBase.db((db)=>{
    db.exec(`INSERT INTO "todo" ("todo") VALUES ("${value}")`,res=>{

      win.webContents.send('heyDBupdaated', todoupdated)
    })

 
  })
  


})


// delete the item 
// sql query not running seccessfully

ipcMain.on('deleteIt', (event, value2) => {

  dialog.showMessageBox({
    title: `Delete? `,
    message: `are you sure to Delete?`,
    detail: `delete this item`,
    buttons: ["Yes", "No"],
    type: 'question'
  }).then(result => {
    if (result.response == '0') {



try{
  dataBase.db((db)=>{
    
     db.exec(`DELETE FROM "todo" WHERE ID = ${value2}`, resp => {
      win.webContents.send('heyDBupdaated', todoupdated)
      if (resp) {
       
        console.log(resp)
      }
    })
    
  })
}catch(erro){
  console.log(erro)
}



     
    } else {
      console.log("you pressed dont delete")

    }

  })
})

ipcMain.handle('read-user-data', async (event, fileName) => {

  const checkPath = path.join(app.getPath('userData'), '\Local Storage/config.json')

  const dbPathExist = fs.readJsonSync(checkPath, { throws: false })

  if (dbPathExist === null) {
   selectedPath =  dialog.showOpenDialogSync({ properties: ['openFile'] })
   
      if (selectedPath) {

        try {
          fs.writeJson(checkPath, { dbPath: selectedPath[0] })
          FinaldbPath = selectedPath[0]
          return FinaldbPath

        } catch (err) {
          console.error("521: " + err)
        }


      } else {
        win.close()
      }
 
  } else {

    const packageObj = fs.readJsonSync(checkPath)
      FinaldbPath = packageObj.dbPath

      return FinaldbPath
   


  }



})
