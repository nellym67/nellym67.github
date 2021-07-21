window.addEventListener('load', () =>{
var d = new Date();
var year = d.getFullYear();
var date = d.getMonth();
var days=d.getDay();
var dayOfMonth =d.getDate();

var monthName="";
 switch(date){
    case date = 0:
         monthName= "January";
         break;
    case date = 1:
         monthName= "February";
         break;
    case date = 2:
         monthName= "March"
         break;
    case date = 3:
         monthName= "April";
         break;
    case date = 4:
         monthName= "May";
         break;
    case date = 5:
         monthName= "June"
         break;
    case date = 6:
         monthName= "July";
         break;
    case date = 7:
         monthName= "August";
         break;
    case date = 8:
         monthName= "September"
         break;
    case date = 9:
        monthName= "October";
        break;
    case date = 10:
        monthName= "November";
        break;
    case date = 11:
        monthName= "December"
        break;

 }
    

var dayName="";
switch(days){
    case days=0:
        dayName= "Sunday"
        break;
    case days = 1:
        dayName="Monday"
        break;
    case days = 2:
        dayName="Tuesday"
        break;
    case days = 3:
        dayName="Wednesday"
        break;
    case days = 4:
        dayName="Thursday"
        break;
    case days = 5:
        dayName="Friday"
        break;
    case days = 6:
        dayName="Saturday"
        break;
        
}

var fullDate= dayName + ", " + dayOfMonth + " "+ monthName +  " " + year;
document.querySelector("#full_date").innerHTML = fullDate;
console.log(fullDate);

if (days==5){
    document.querySelector(".pancake_banner").style.display="block"
}
});


