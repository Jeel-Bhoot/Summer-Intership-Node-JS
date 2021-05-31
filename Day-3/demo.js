function greet(name, callback){
    console.log('Hi' + ' ' + name);
    callback();
}
function callMe(){
    console.log('I am Callback Funcation');
}
greet('Jeel', callMe);