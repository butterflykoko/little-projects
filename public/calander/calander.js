"use strict";
const date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

let header = () => {
  let currdate = document.querySelector(".month-year");
  let m;
  switch (new Date().getMonth()) {
    case 0:
      m = "January";
      break;
    case 1:
      m = "Febuary";
      break;
    case 2:
      m = "March";
      break;
    case 3:
      m = "April";
      break;
    case 4:
      m = "May";
      break;
    case 5:
      m = "June";
      break;
    case 6:
      m = "July";
      break;
    case 7:
      m = "August";
      break;
    case 8:
      m = "September";
      break;
    case 9:
      m = "October";
      break;
    case 10:
      m = "November";
      break;
    case 11:
      m = "December";
  }

  return (currdate.innerHTML = m + " " + year);
};

header();

const days = () => {
  var day = document.getElementById("days").innerHTML;
  let day1 = new Date(year, month, 1).getDay();

  let endDate = new Date(year, month + 1, 0).getDate();
  let lastDay = new Date(year, month, endDate).getDay();

  let i = 1;

  for (i <= endDate; i++; ) {
    if (i === date.getDate()) {
      const li = document.createElement("li");
      const num = document.createTextNode(i);

      li.appendChild(num);
      day += document.getElementById("days").appendChild(li);
    }
  }

  for (let j = lastDay; j < 6; i++) {  
    const li = document.createElement("li");
    const num = document.createTextNode(j - lastDay);

    li.appendChild(num);
    let el = document.getElementById("days").appendChild(li);
    day += el.classList.add("inactive");
  }

};

days();
