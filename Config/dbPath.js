const fs = require('fs-extra')
const electron = require('electron')
const sqlite3 = require('sqlite3')
var Promise = require('promise');





module.exports = {

    dbConnection: function () {



            ipcRenderer.invoke('read-user-data').then(rvdbPath => {
                   dbPath = rvdbPath        
                   
            })

            try {
                db = new sqlite3.Database(dbPath)
                db.exec('CREATE TABLE IF NOT EXISTS "todocddd" ("id" INTEGER PRIMARY KEY AUTOINCREMENT,"todo" text);')
                
            } catch (error) {
               console.log(error)
            }
        

            return "dkfj"
      
    }
}
