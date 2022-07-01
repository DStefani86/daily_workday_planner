var currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(currentDate);

const hour09 = $("#09");
const hour10 = $("#10");
const hour11 = $("#11");
const hour12 = $("#12");
const hour01 = $("#01");
const hour02 = $("#02");
const hour03 = $("#03");
const hour04 = $("#04");
const hour05 = $("#05");
var hourArr = [
  hour09,
  hour10,
  hour11,
  hour12,
  hour01,
  hour02,
  hour03,
  hour04,
  hour05,
];

var hour = moment().hour();
console.log(hour);

function currentTime(before, after) {
  if (hour == before) {
    after.addClass("present");
  } else if (hour < before) {
    after.addClass("future");
  } else if (hour > before) {
    after.addClass("past");
  }
}

currentTime(9, hour09);
currentTime(10, hour10);
currentTime(11, hour11);
currentTime(12, hour12);
currentTime(13, hour01);
currentTime(14, hour02);
currentTime(15, hour03);
currentTime(16, hour04);
currentTime(17, hour05);

var button = $(".btn");
button.on("click", storeTasks);

function storeTasks(event) {
  var savedText = event.target;
}
