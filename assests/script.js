var currentDayEl = $("#currentDay");
var currentTimeEl = $("#currentTime");

// function that displays moment day and month
function displayDay() {
  var rightNow = moment().format("dddd MMM Do");
  currentDayEl.text(rightNow);
}

function displayTime() {
  var rightNow = moment().format("h:mm a");
  currentTimeEl.text(rightNow);
}

displayDay();
displayTime();
setInterval(displayTime, 10000);

//storing element content into variable
var row9ALabelEl = $("#row9ALabel");
var timeBlock9 = row9ALabelEl.text;
var row9ABlockEl = $("#row9ABlock");

console.log(row9ABlockEl);

//compare text content to current time hour
function compareTime() {
  var thisHour = moment().format("h a");

  if (timeBlock9 === thisHour) {
    row9ABlockEl.css("background-color", "red");
  } else if (timeBlock9 < thisHour) {
    row9ABlockEl.css("background-color", "gray");
  } else if (timeBlock9 > thisHour) {
    row9ABlockEl.css("background-color", "green");
  }
}

compareTime();
