
const sqlite3 = require('sqlite3')
const path  = require('path')
const fs = require('fs-extra')
const { dialog, app, Main, remote } = require('electron')



 class dataBase {
    constructor(){
       
         ipcRenderer.invoke('read-user-data').then(rvdbPath => {
             console.log("inv" + rvdbPath)
            return getDb(rvdbPath)
            
           
        })
            
      
    function getDb(dbPath){
        console.log(dbPath)
        try {
            
            const db = new sqlite3.Database(dbPath)
            // console.log(db)
            db.exec('CREATE TABLE IF NOT EXISTS "todocddd" ("id" INTEGER PRIMARY KEY AUTOINCREMENT,"todo" text);')
            
            return getDb(db)
        } catch (error) {
           console.log(error)
           console.log("114")
        }

    }

        
    
    // return await getDb()
    
    }
    
}



module.exports = dataBase;