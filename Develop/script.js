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

var block8 = document.querySelector("#hour-8")
var block9 = document.querySelector("#hour-9")
var block10 = document.querySelector("#hour-10")
var block11 = document.querySelector("#hour-11")
var block12 = document.querySelector("#hour-12")
var block1 = document.querySelector("#hour-1")
var block2 = document.querySelector("#hour-2")
var block3 = document.querySelector("#hour-3")
var block4 = document.querySelector("#hour-4")
var block5 = document.querySelector("#hour-5")
var block6 = document.querySelector("#hour-6")


var i=1000000

console.log(now)
console.log(now.$H);

var localT = 0
console.log(localT);

today.textContent = localT;

function clock () {
  if (i>0) {
    i --;}
  setTimeout(clock, 1000)
    console.log ("updating time")
    localT = dayjs().subtract(7, 'hours')
    today.textContent = localT
}

clock ()

//var utc = require('dayjs/plugin/utc')
//var timezone = require('dayjs/plugin/timezone') // dependent on utc plugin

//dayjs.extend(utc)
//dayjs.extend(timezone)

//dayjs.tz.guess()
//console.log (dayjs.tz.guess())
var hourBlocksAll = document.querySelectorAll(".time-block")
var hourTime = document.querySelector(".hour")
var hourTimeAll = document.querySelectorAll(".hour")
var appointment = document.querySelector(".description")
const clearButton = document.querySelector(".clear")
const saveButton8 = document.querySelector(".btn8")
const saveButton9 = document.querySelector(".btn9")
const saveButton10 = document.querySelector(".btn10")
const saveButton11 = document.querySelector(".btn11")
const saveButton12 = document.querySelector(".btn12")
const saveButton1 = document.querySelector(".btn1")
const saveButton2 = document.querySelector(".btn2")
const saveButton3 = document.querySelector(".btn3")
const saveButton4 = document.querySelector(".btn4")
const saveButton5 = document.querySelector(".btn5")
const saveButton6 = document.querySelector(".btn6")


function getDOM() {
  var storedAppointment = localStorage.getItem("appointment")

  appointment.value = storedAppointment
}

getDOM();

function clearDOM() {
  localStorage.clear("appointment");
  getDOM()
}
//console.log(hourBlocksAll[0])
//console.log(hourBlocksAll[0].firstElementChild.innerHTML)
//console.log(hourBlocksAll[0].innerText)


//var hour_block = hourBlocksAll[0].innerText.slice(0,-2)
//console.log(hour_block)
//console.log(localT.$H > hour_block)
function timeSelection() {
  hourBlocksAll.forEach(hour => {
    console.log(hour.innerText)
    console.log(now.$H > hour.innerText.slice(0,-2))
    if (now.$H > hour.innerText.slice(0,-2)){
    hour.classList.remove("present")
    hour.classList.remove("future")
    hour.classList.add("past")}
    else if (now.$H = hour.innerText.slice(0,-2)){
      hour.classList.add("present")
      hour.classList.remove("future")
      hour.classList.remove("past")}
      else if (now.$H < hour.innerText.slice(0,-2)){
        hour.classList.remove("present")
        hour.classList.add("future")
        hour.classList.remove("past")}
      }
  )
    }
    

timeSelection()
//create local storage function
function saveDOM() {
  localStorage.setItem("Hour", hourTime.innerHTML)
  localStorage.setItem("appointment", appointment.value)
  //console tests
  console.log(hourTime.textContent)
  console.log(appointment.value)
}

localStorage.setItem("Hour", hourTime.textContent)

//localStorage.setItem("Hour", hourTime[0].textContent)

//working on creating for loop to create array for local storage
var appointments 

//localStorage.setItem("Hours", JSON.stringify(appointments.value))

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  console.log(5)
  //Add a listener for click events on the save button.
  saveButton8.addEventListener("click", saveDOM);
  saveButton9.addEventListener("click", saveDOM);
  saveButton10.addEventListener("click", saveDOM);
  saveButton11.addEventListener("click", saveDOM);
  saveButton12.addEventListener("click", saveDOM);
  saveButton1.addEventListener("click", saveDOM);
  saveButton2.addEventListener("click", saveDOM);
  saveButton3.addEventListener("click", saveDOM);
  saveButton4.addEventListener("click", saveDOM);
  saveButton5.addEventListener("click", saveDOM);
  saveButton6.addEventListener("click", saveDOM);



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

clearButton.addEventListener("click", clearDOM);