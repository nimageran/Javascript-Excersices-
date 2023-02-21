/* 3. Write a JavaScript program to get the current date.  
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy*/


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0'); // Add 0 to the begineeing until the total length becomes 2
var mm = String(today.getMonth() + 1).padStart(2, '0'); // Add 0 to the begineeing until the total length becomes 2
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.write(today);
