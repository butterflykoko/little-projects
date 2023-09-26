"use strict";
var apples = "apples.";
console.log("These are " + apples);
var x = 3;
var y = 5;
console.log(x + y);
var cake = "cake";
var strawberry = "strawberry";
console.log(strawberry + " " + cake);
var yellow = "yellow ";
var house = "house";
var yellowHouse = yellow + house;
console.log(yellowHouse);
let day = 6;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wendsday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend");
}
let i = -1;
while (i < 100) {
    console.log(i);
    i++;
}
for (let j = 0; j <= 10; j++) {
    console.log(j);
}
function bread(flour, water, time) {
    // Notes: flour and water must add up to 100
    console.log("Flour: " + flour);
    console.log("Water: " + water);
    console.log("Mixing...");
    console.log("Set minutes: " + time);
    console.log("Baking...");
    console.log("All done!");
}
bread(60, 40, 30);
class dog {
    breed;
    age;
    color;
    constructor(breed, age, color) {
        this.breed = breed;
        this.age = age;
        this.color = color;
    }
}
let pugColors = ["black", "silver", "fawn"];
class pug extends dog {
    constructor(breed, age, color) {
        super(breed, age, color);
        this.color = pugColors;
    }
}
var blackPug = new pug("pug", 0.8, pugColors[1]);
console.log(blackPug);
class animal {
    name;
    height;
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }
    setName(n) {
        return (this.name = n);
    }
    getName() {
        return this.name;
    }
    setHeight(h) {
        return (this.height = h);
    }
    getHeight() {
        return this.height;
    }
}
const penguin = new animal();
penguin.setName("penguin");
penguin.setHeight(3.2);
console.log(penguin.getName());
class parentClass {
    person;
    constructor(person) {
        this.person = person;
    }
}
class childClass extends parentClass {
    constructor(person) {
        super(person);
    }
}
class grandChild extends childClass {
    constructor(person) {
        super(person);
    }
}
var myVariable = new grandChild("person");
console.log(myVariable);
