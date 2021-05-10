const months = [
 "January",
 "February",
 "March",
 "April",
 "May",
 "June",
 "July",
 "August",
 "September",
 "October",
 "November",
 "December"
];

const weekdays = [
 "Sunday",
 "Monday",
 "Tuesday",
 "Wednesday",
 "Thursday",
 "Friday",
 "Saturday"
];

const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

const yearToday = new Date().getFullYear();

/* ALWAYS remember to start counting from 0 */

/* Formatted in new Date(year, month, day, hours, minutes, seconds, milliseconds) */
let futureDate = new Date(yearToday, 04, 10, 0, 0);


/* Notes */
/* Month is formatted from 0 - 11  */
/* Hours is formatted from 0 - 23  */
/* Minutes is formatted from 0 - 59  */






