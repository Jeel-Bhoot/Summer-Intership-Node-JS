function showTime(){
    let dateTime = new Date();
    let time = dateTime.toLocaleTimeString();
    console.log(time)
    setTimeout(showTime, 3000);
}
showTime();