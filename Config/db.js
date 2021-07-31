
const sqlite3 = require('sqlite3')
const path  = require('path')
const fs = require('fs-extra')
const { dialog, app, Main, remote } = require('electron')
const { stringify } = require('querystring')


 class dataBase {
    constructor(){
        this.olakka = "KK"
       return  ipcRenderer.invoke('read-user-data').then(rvdbPath => {
            
            try {
                db = new sqlite3.Database(rvdbPath)
                db.exec('CREATE TABLE IF NOT EXISTS "todocddd" ("id" INTEGER PRIMARY KEY AUTOINCREMENT,"todo" text);')
               
            } catch (error) {
               console.log(error)
            }
           
        })
            
       
    

        
      
 
    
    }
    
}
module.exports = dataBase;