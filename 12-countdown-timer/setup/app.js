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

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4')
console.log(items);

let futureDate = new Date(2021,11,14,11,30,0);
console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
// console.log(months[month]);

let date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];
console.log(weekday)
giveaway.textContent = `giveaway ends on ${weekday}, ${month} ${date} ${year} ${hours}:${minutes}am`;
