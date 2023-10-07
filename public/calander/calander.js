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

let days = () => {
  let m;
  switch (new Date().getMonth()) {
    case 0:
      m = 31;
      break;
    case 1:
      m = 28;
      break;
    case 2:
      m = 31;
      break;
    case 3:
      m = 30;
      break;
    case 4:
      m = 31;
      break;
    case 5:
      m = 30;
      break;
    case 6:
      m = 31;
      break;
    case 7:
      m = 31;
      break;
    case 8:
      m = 30;
      break;
    case 9:
      m = 31;
      break;
    case 10:
      m = 30;
      break;
    case 11:
      m = 31;
  }

  let num = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  let numbers = () => {
    let i = 0;
    while (i < m) {
      for (let j of num) {
        j++;
        return num;
      }
    }

    return num;
  };

  numbers();

  for (let i; i >= m; i++) {
    const li = document.createElement("li");
    let n = document.createTextNode(numbers());
    li.appendChild(n);
    document.getElementById("days").appendChild(li);
  }
};

days();
