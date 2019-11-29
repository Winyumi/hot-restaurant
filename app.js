const fs = require('fs');
const Table = require('lib/Table');
const util = require('util');
const path = require('path');
const readFileAsync = promisify(fs.readFile);
let tables = [];

function init(){

}

function readTables(){
    readFileAsync(path.join(__dirname, "storage/tables.json"))
    .then(data =>{
        intermediateTables = JSON.parse(data);
       
    });
}
