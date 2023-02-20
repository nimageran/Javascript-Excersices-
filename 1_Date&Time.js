/* 1. Write a JavaScript program to display the current day and time in the following format. 
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38*/


// get local machine date time
const date = new Date();

// get the date as a string
const n = date.toDateString();

// get the time as a string
const time = date.toLocaleTimeString();

// display date
console.log('Today is : ' + n);

// display time
console.log('Current time is : ' + time);
