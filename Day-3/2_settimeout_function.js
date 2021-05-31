// The program that show setTimeout Function
function greet(){

   console.log("Hello World");
}
 
function sayName(name){
   console.log('Hello' + ' ' + name);
}

// Calling the Function
setTimeout(greet, 2000);
sayName('Jeel');

setTimeout(function(){
   console.log('I have come after 500 miliseconds')},500);