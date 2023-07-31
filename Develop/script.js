//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner
//HEN the current day is displayed at the top of the calendar
//WHEN I scroll down
//THEN I am presented with time blocks for standard business hours of 9am to 5pm
//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present,
//WHEN I click into a time block
//THEN I can enter an event
//WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist


//import dayjsPluginUTC from 'dayjs-plugin-utc';
//import utc from 'dayjs/plugin/utc';
//import timezone from 'dayjs/plugin/timezone';
//dayjs.extend(utc);
//dayjs.extend(timezone);
//dayjs().tz('America/Toronto');
//import dayjsPluginUTC from 'dayjs-plugin-utc'
//import utc from "dayjs/plugin/utc";
//import timezone from "dayjs/plugin/timezone";
//dayjs.extend(dayjsPluginUTC)
//var local = day.js(now).subtract(8, "hour")
//var utc = require('dayjs/plugin/utc')
//var timezone = require('dayjs/plugin/timezone')
//dateFormat(date, format, localize = true) {
// if (!localize) {
//  return dayjs.utc(date).tz(dayjs.tz.guess()).format(format);
// }
// return dayjs.utc(date).local().tz(dayjs.tz.guess()).format(format);
// },

var today = document.querySelector("#currentDay");
var now = dayjs();

console.log(now);

var localT = dayjs().subtract(7, 'hours');
console.log(localT);

today.textContent = localT;



//var utc = require('dayjs/plugin/utc')
//var timezone = require('dayjs/plugin/timezone') // dependent on utc plugin

//dayjs.extend(utc)
//dayjs.extend(timezone)

//dayjs.tz.guess()
//console.log (dayjs.tz.guess())

var hourBlock = document.querySelectorAll(".hour")
const saveButton = document.querySelector(".saveBtn")
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

function saveDOM () {
  localStorage.name
  console.log("save")
  }


$(function () {
  console.log(5)
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

saveButton.addEventListener("click", saveDOM);