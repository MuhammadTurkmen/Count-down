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
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway')
const deadling = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadling-format h4')

let futureDate = new Date(2024, 4, 24, 11, 30, 0)

const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()


let month = futureDate.getMonth()
month = months[month]
const date = futureDate.getDate()


const weekday = weekdays[futureDate.getDay()]
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`


// future time in ms  
const futureTime = futureDate.getTime()

function getRemainingTime()