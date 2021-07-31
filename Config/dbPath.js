const fs = require('fs-extra')
const electron = require('electron')
const path = require('path')
var Promise = require('promise');
let dbPathFinal = ""
module.exports = {dbConnection: function (){
    return new Promise ((resolve, reject)=>{

        const checkPath = path.join( app ? app.getPath('userData') : remote.app.getPath('userData'),'\Local Storage/config.json')
       
        const dbPath = fs.readJsonSync(checkPath, { throws: false })
        
        if(dbPath === null){
            
               
                        app.whenReady().then(() => {
 
                            dialog.showOpenDialog({ properties: ['openFile'] }).then(result=>{
                                if(!result.canceled){
                                   
                                    fs.writeJsonSync(checkPath, {dbPath:  result.filePaths[0] })
                                    dbPathFinal = result.filePaths[0]
                                }else{
             

                                    //close application
                                }
                    })
                })
                    

        }
        dbPathFinal = dbPath.dbPath
        console.log("step 3.1")
        try{
            
            db = new sqlite3.Database(dbPathFinal)
           
            db.exec('CREATE TABLE IF NOT EXISTS "todo" ("id" INTEGER PRIMARY KEY AUTOINCREMENT,"todo" text);')
            resolve(db)
        }catch(error){
            reject(error)
        }

    })
}
}