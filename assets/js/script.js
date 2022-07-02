//a variable to the grab the moment.js
var currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(currentDate);

//const variables for text area by hour
const hour09 = $("#09");
const hour10 = $("#10");
const hour11 = $("#11");
const hour12 = $("#12");
const hour01 = $("#01");
const hour02 = $("#02");
const hour03 = $("#03");
const hour04 = $("#04");
const hour05 = $("#05");

//variable to use the current hour within a function
var hour = moment().hour();
console.log(hour);

//this function color codes the hour of the day based on if has already passed or is upcoming
function currentTime(before, after) {
  if (hour == before) {
    after.addClass("present");
  } else if (hour < before) {
    after.addClass("future");
  } else if (hour > before) {
    after.addClass("past");
  }
}

//functions for each individual hour
currentTime(9, hour09);
currentTime(10, hour10);
currentTime(11, hour11);
currentTime(12, hour12);
currentTime(13, hour01);
currentTime(14, hour02);
currentTime(15, hour03);
currentTime(16, hour04);
currentTime(17, hour05);

//event listener for all save buttons to store the input of each text area local store
$(".saveBtn").on("click", function (event) {
  var saveButton = event.target;
  var savedText = $(this).siblings("textarea").val();
  if (savedText == "") {
    console.log("empty");
  } else {
    console.log("text");
    localStorage.setItem(saveButton.dataset.save, savedText);
  }
});

//the function to display all saved text within the local storage
function keepText() {
  hour09.text(localStorage.getItem("09btn"));
  hour10.text(localStorage.getItem("10btn"));
  hour11.text(localStorage.getItem("11btn"));
  hour12.text(localStorage.getItem("12btn"));
  hour01.text(localStorage.getItem("01btn"));
  hour02.text(localStorage.getItem("02btn"));
  hour03.text(localStorage.getItem("03btn"));
  hour04.text(localStorage.getItem("04btn"));
  hour05.text(localStorage.getItem("05btn"));
}
keepText();
