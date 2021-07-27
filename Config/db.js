
const sqlite3 = require('sqlite3')
const path  = require('path')
const fs = require('fs-extra')


// import  sqlite3  from 'sqlite3'
class dataBase {
     constructor(){
    
        console.log("step 1")
        const file = path.join(__dirname,'../db/SqlNew3.db')
        fs.pathExists(file, (err, exists) => {
            console.log("step 2")
            console.log(err) // => null
            if(exists===true){
                console.log("step 3")
              

            }else{
                alert("file not found")
            }
          })


          try{

            this.db = new sqlite3.Database(path.join(__dirname,'../db/SqlNew3.db'))
            console.log("step 4")
            this.db.exec('CREATE TABLE IF NOT EXISTS "todo" ("id" INTEGER PRIMARY KEY AUTOINCREMENT,"todo" text);')
            console.log("step 5")
                
        }catch(error){

            console.log("Errror" + error)
        }
 

} 
}
module.exports = dataBase;