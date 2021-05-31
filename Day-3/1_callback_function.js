//function 
function greet(name, callback){
   console.log('Hi' + ' ' + name);
   callback();
}

// callback function
function callme(){
   console.log('I am callback function');
}

//passing function as argument
greet('Jeel', callme);