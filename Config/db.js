
const sqlite3 = require('sqlite3')
const path  = require('path')
// import  sqlite3  from 'sqlite3'
class dataBase {
    constructor(){
      
        this.dc = "dlfkj"
            try{
                this.db = new sqlite3.Database(path.join(__dirname,'../db/SqlNew3.db'))
                this.db.exec('CREATE TABLE IF NOT EXISTS "todo" ("id" INTEGER PRIMARY KEY AUTOINCREMENT,"todo" text);')
                
            }catch{

                console.log("Errror")
            }
 
 
    
    }
    
}
module.exports = dataBase;