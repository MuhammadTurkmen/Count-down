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

function getRemainingTime() {
  const today = new Date().getTime
  const t = futureTime - today
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMinute = 60 * 1000
  // calculate all value
  let days = t/oneDay
  days = Math.floor(days)
  let hours = Math.floor((t % oneDay) / oneHour)
  let minutes = Math.floor((t % oneHour) / oneMinute)



}

getRemainingTime()