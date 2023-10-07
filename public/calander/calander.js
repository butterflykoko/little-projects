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

  
  let today;

  for (let i; i >= m; i++) {

  }

};

days();
