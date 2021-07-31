
const sqlite3 = require('sqlite3')
const path  = require('path')
const fs = require('fs-extra')
const { dialog, app, Main, remote } = require('electron')



 class dataBase {
    constructor(){
    
        // return new promises((resolve,reject)=>{

        // })   
       
       

        const checkPath = app.getPath('userData') 
        
        
       alert(checkPath)
        const dbPath = fs.readJsonSync(checkPath + '/config.json', { throws: false })
        
        if(dbPath != null){
            
                console.log("1: " + dbPath.dbPath)
                        console.log("step 3.1")
                        try{
                            
                            this.db = new sqlite3.Database(dbPath.dbPath)
                            this.db.exec('CREATE TABLE IF NOT EXISTS "todo" ("id" INTEGER PRIMARY KEY AUTOINCREMENT,"todo" text);')
                            console.log("step 4")
                        }catch(error){
console.log(error)
                        }
                    

        }else{
            
            app.whenReady().then(() => {
 
                dialog.showOpenDialog({ properties: ['openFile'] }).then(result=>{
                    if(!result.canceled){
                       
                        fs.writeJsonSync(checkPath, {dbPath:  result.filePaths[0] })
                        // pathExist()
                    }else{
 
                    }
        })
    })
        }



        
        

        
        // if(fs.existsSync(file)){
        //     pathExist()
        //    
                    
        // }
            
            
                 
                   
              

        
      
 
    
    }
    
}



module.exports = dataBase;