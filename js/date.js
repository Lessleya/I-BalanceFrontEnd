let date = new Date();
let dayOfWeekNumber = date.getDay();
let nameOfDay = 'home';
let month = date.getUTCMonth();
var day = date.getUTCDate();
let monthName = 'Month';
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
monthName = months[month];
nameOfDay = days[dayOfWeekNumber]

//Display the day of the week

document.getElementById('weekday').innerHTML = `${nameOfDay},`;
document.getElementById('monthDay').innerHTML = `${monthName} ${day}`;
