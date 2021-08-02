const fs = require('fs-extra')
const electron = require('electron')
const sqlite3 = require('sqlite3')
var Promise = require('promise');

const path = require('path');
const { app } = require('electron');




module.exports.dbConnect = function (done) {

    ipcRenderer.invoke('read-user-data').then(rvdbPath => {

        db = new sqlite3.Database(rvdbPath)
        db.exec('CREATE TABLE IF NOT EXISTS "todo" ("id" INTEGER PRIMARY KEY AUTOINCREMENT,"todo" text);')
        
        done(db)


    })

}

module.exports.db = function(done){
    const dbPath = fs.readJsonSync(path.join(app.getPath('userData'), '\Local Storage/config.json'))
    db = new sqlite3.Database(dbPath.dbPath)
    
    done(db)
}