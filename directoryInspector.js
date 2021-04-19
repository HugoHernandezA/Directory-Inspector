const setDir = require('./helperDir');
const path = require('path');
const fs = require('fs');

//const directory2 = setDir.setDir('./content');
const directory = setDir.setDir(process.argv[2]);

fs.readdir(directory, (err, files) => {
    try{
        if (fs.existsSync(directory)) {
            files.forEach(file => {
                if (fs.lstatSync(path.resolve(directory, file)).isDirectory()) {
                  console.log('Directory: ' + file + '/');
                } else {
                  console.log('File: ' + file);
                }
            });
        } else {
            throw "Directory does not exist or is not specified.";
        }
    }
    catch(err) {
        console.log(err);
    }
});