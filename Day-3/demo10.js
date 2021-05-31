var fs = require('fs');
//Synchronous Read
var data = fs.readFileSync('demo.html');
console.log("Synchronous read: " + data.toString());
console.log("program Ended");