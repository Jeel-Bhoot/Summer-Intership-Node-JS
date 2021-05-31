var fs = require('fs');
fs.appendFile('test.txt', 'demo1.txt!', function (err){
    if (err) throw err;
    console.log('File Renamed!');
});