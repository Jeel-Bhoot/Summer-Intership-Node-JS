// Program to display time every 3 second
function showTime(){
   // return new date and time
   let dateTime = new Date();
   // returns the current local time
   let time = dateTime.toLocalTimeString();
   console.log(time);
   // display time after 3 second
   setTimeout(showTime, 3000);
}
//Calling the function
showTime();