const fs = require('fs-extra')
const electron = require('electron')
const sqlite3 = require('sqlite3')
var Promise = require('promise');







module.exports.dbConnect = function (done) {

    ipcRenderer.invoke('read-user-data').then(rvdbPath => {


        db = new sqlite3.Database(rvdbPath)
        db.exec('CREATE TABLE IF NOT EXISTS "todocddd" ("id" INTEGER PRIMARY KEY AUTOINCREMENT,"todo" text);')
        
        done(db)


    })

}



// module.exports.dbConnection = function () {



//             ipcRenderer.invoke('read-user-data').then(rvdbPath => {
//                 try {

//                     db = new sqlite3.Database(rvdbPath)
//                 db.exec('CREATE TABLE IF NOT EXISTS "todocddd" ("id" INTEGER PRIMARY KEY AUTOINCREMENT,"todo" text);')
//                    thenga(db)
//                 } catch (error) {
//                    console.log(error)
//                 }        

//             })





//     }

//     module.exports.thenga = function (db){
//         alert("punnakan vilichu" + db)
//         return db
//     }