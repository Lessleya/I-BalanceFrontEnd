
let date = new Date();
let dayOfWeekNumber = date.getDay();
let nameOfDay = "home";
let month = date.getUTCMonth() + 1;
var day = date.getUTCDate();
let monthName = "Month";

switch(month){
    case 1:
    monthName = "January";
        break;

    case 2:
    monthName = "February";
        break;
    
    case 3:
    monthName = "March";
        break;

    case 4:
    monthName = "April";
        break;

    case 5:
    monthName = "May";
        break;

    case 6:
    monthName = "June";
        break;

    case 7:
    monthName = "July";
        break;

    case 8:
    monthName = "August";
        break;

    case 9:
    monthName = "September";
        break;

    case 10:
    monthName = "October";
        break;

    case 11:
    monthName = "November";
        break;

    case 12:
    monthName = "December";
        break;
}

switch(dayOfWeekNumber){
    case 0: 
        nameOfDay = "Sunday";
        break;
    case 1:
        nameOfDay = "Monday";
        break;
    case 2:
        nameOfDay = "Tuesday";
        break;
    case 3:
        nameOfDay = "Wednesday";
        break;
    case 4:
        nameOfDay = "Thursday";
        break;
    case 5:
        nameOfDay = "Friday";
        break;
    case 6:
        nameOfDay = "Saturday";
        break;

}
//Display the day of the week

document.getElementById("weekday").innerHTML = nameOfDay;
document.getElementById("month").innerHTML = monthName +",";
document.getElementById("day").innerHTML = day;

