
const sqlite3 = require('sqlite3')
const path  = require('path')
const fs = require('fs-extra')
const { BrowserWindow, ipcRenderer } = require('electron')

 class dataBase {
    constructor(){
    
        const file = path.join(__dirname,'../ddb/SqlNew3.db')
        if(fs.existsSync(file)){
            
                
                            console.log("step 3.1")
                            this.db = new sqlite3.Database(path.join(__dirname,'../db/SqlNew3.db'))
                            this.db.exec('CREATE TABLE IF NOT EXISTS "todo" ("id" INTEGER PRIMARY KEY AUTOINCREMENT,"todo" text);')
                            console.log("step 4")
                    
        }else{
            console.log("mwoneeeee you dont have the path")
        }
        
        // .then(exists =>{
        //       if(exists===true){
        //         console.log("step 3")
        //         this.db = new sqlite3.Database(path.join(__dirname,'../db/SqlNew3.db'))
        //         this.db.exec('CREATE TABLE IF NOT EXISTS "todo" ("id" INTEGER PRIMARY KEY AUTOINCREMENT,"todo" text);')
        //         console.log("step 4")
        //       }
        //     })
        // .catch(err=>{
        //     console.error("error: " + err)
           
        // })

           
 
    
    }
    
}
module.exports = dataBase;