
const sqlite3 = require('sqlite3')
const path  = require('path')
const fs = require('fs-extra')
const { app } = require('electron')







 class dataBase {
    constructor(){
    
        const setDbpath = path.join(app.getPath('userData'),'/todoApp Storage/Config.json')

        fs.ensureFile(setDbpath)
        .then((result) => {
          
          console.log(fs.readJsonSync(setDbpath))

       
          
          


          fs.writeJSONSync(file, {path: 'Null ennu kodukkna p'})
      
fs.readJsonSync(file)

        })
        .catch(err => {
          console.error(err)
        })



        // if(fs.existsSync(file)){
            
        //     this.dbPath = "true"
                            
        //                     this.db = new sqlite3.Database(path.join(__dirname,'../db/SqlNew3.db'))
        //                     this.db.exec('CREATE TABLE IF NOT EXISTS "todo" ("id" INTEGER PRIMARY KEY AUTOINCREMENT,"todo" text);')
                            
                    
        // }else{
          
          
        // }
          
           
        
    
    }
    
}



module.exports = dataBase;