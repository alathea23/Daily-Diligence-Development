//playing around with local time logic
//import dayjsPluginUTC from 'dayjs-plugin-utc';
//import utc from 'dayjs/plugin/utc';
//import timezone from 'dayjs/plugin/timezone';
//dateFormat(date, format, localize = true) {
// if (!localize) {
//  return dayjs.utc(date).tz(dayjs.tz.guess()).format(format);
// }
var hourBlocksAll = document.querySelectorAll(".time-block")
var hourTime = document.querySelector(".hour")
var hourTimeAll = document.querySelectorAll(".hour")
var appointment = document.querySelector(".description")
var appointmentsAll = document.querySelectorAll(".description")
var header = document.querySelector("h1")
const clearButton = document.querySelector(".clear")
const saveButtons = document.querySelectorAll(".btn")

//replaced with iterating over a for loop
//var block8 = document.querySelector("#hour-8")
//var block9 = document.querySelector("#hour-9")
//var block10 = document.querySelector("#hour-10")
//ar block11 = document.querySelector("#hour-11")
//var block12 = document.querySelector("#hour-12")
//var block1 = document.querySelector("#hour-1")
//var block2 = document.querySelector("#hour-2")
//var block3 = document.querySelector("#hour-3")
//var block4 = document.querySelector("#hour-4")
//var block5 = document.querySelector("#hour-5")
//var block6 = document.querySelector("#hour-6")

var today = document.querySelector("#currentDay");
var now = dayjs().format("MMM D, h:mm:ss A");
var nowHour = dayjs().format("H")
console.log(nowHour)
var headerNow = dayjs().format("MMM D")

header.innerText = headerNow + ", Work Scheduler"

var i = 1000000

console.log(now)
console.log(now.$H);

var localT = 0

today.textContent = localT;


//function for single appointment field:
//function getDOM() {
// var storedAppointment = localStorage.getItem("appointment")
// appointment.value = storedAppointment
//}
//getDOM();

//testing code commented out:
//console.log(hourBlocksAll)
//console.log(localT)
//console.log(localT.$H)

//alternate path to get hour - error was only 12 hour time:
//console.log(hourBlocksAll[0].firstElementChild.innerHTML)
//console.log(hourBlocksAll[0].innerText)
//var hour_block = hourBlocksAll[0].innerText.slice(0,-2)
//console.log(hour_block)
//console.log(localT.$H > hour_block)

//function to change color formmating on appointment blocks by hour
function timeSelection() {
  console.log(nowHour)

  hourBlocksAll.forEach(hour => {
    //console.log(nowHour)
    var blockTime = hour.innerText.slice(0, -2)
    if (blockTime < 8) {
      blockHour = parseInt(blockTime) + 12
    }
    else {
      blockHour = parseInt(blockTime)
    }
    if (nowHour > blockHour) {
      hour.classList.remove("present")
      hour.classList.remove("future")
      hour.classList.add("past")
      console.log(nowHour)
      //console.log(blockHour)
    }
    else if (nowHour == blockHour) {
      hour.classList.add("present")
      hour.classList.remove("future")
      hour.classList.remove("past")
      console.log(nowHour)
      //console.log(blockHour)
    }
    else if (nowHour < blockHour) {
      hour.classList.remove("present")
      hour.classList.add("future")
      hour.classList.remove("past")
      console.log(nowHour)
     // console.log(blockHour)
    }
  }
  )
}

timeSelection()


//updating code to iterate over a for loop
function saveDOMall() {
  let fullhour = 8
  var apptLog = []
  appointmentsAll.forEach(appt => {
    console.log(appt.value)
    let apptContent = [appt.value]
    apptLog = apptLog.concat(apptContent)
    localStorage.setItem("savedAppt", JSON.stringify(apptLog))
    fullhour++
  })
  //Testing code below
  //var recall = JSON.parse(localStorage.getItem("savedAppt"))
  //console.log (recall)
}

//create local storage function for single button - replaced with savedDOMall
//function saveDOM() {
 // localStorage.setItem("Hour", hourTime.innerHTML)
 // localStorage.setItem("appointment", appointment.value)
  //console tests
 // console.log(hourTime.textContent)
 // console.log(appointment.value)
//}


//localStorage.setItem("Hour", hourTime[0].textContent)
//working on creating for loop to create array for local storage

localStorage.setItem("Hours", JSON.stringify(appointmentsAll.value))

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  console.log(5)


  //function to update clock to be a live clock
  function clock() {
    if (i > 0) {
      i--;
    }
    setTimeout(clock, 1000)
    console.log("updating time")
    localT = dayjs().format("h:mm:ss A")
    today.textContent = "🕐: " + localT
  }
  // calling clock function
  clock()

  //alternate path testing - 
  //console.log(localT.$H);

  //Add a listener for click events on the save button.
  function getDOMall() {
    var recall = JSON.parse(localStorage.getItem("savedAppt")) || ["", "", "", "", "", "", "", "", "", "", "",]
    console.log(recall)
    let i = 0
    appointmentsAll.forEach(appt => {
      appt.value = recall[i]
      i++
    })
  }
  //calling local storage to populate on page load
  getDOMall();
  
  // iterating save function over all save buttons
  saveButtons.forEach(button => button.addEventListener("click", saveDOMall))

//clearing storage to reset to new day
  function clearDOM() {
    localStorage.clear("appointment");
    getDOMall()
  }
  
  clearButton.addEventListener("click", clearDOM);
});

