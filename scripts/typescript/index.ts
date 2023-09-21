"use strict";
var apples: string = "apples.";
console.log("These are " + apples);

var x: number = 3;
var y: number = 5;
console.log(x + y);

var cake: string = "cake";
var strawberry: string = "strawberry";
console.log(strawberry + " " + cake);

var yellow: string = "yellow ";
var house: string = "house";
var yellowHouse: string = yellow + house;
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

function bread(flour: number, water: number, time: number) {
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
  public breed: string;
  public age: number;
  public color: unknown;

  public constructor(breed: string, age: number, color: unknown) {
    this.breed = breed;
    this.age = age;
    this.color = color;
  }
}

let pugColors: readonly string[] = ["black", "silver", "fawn"];

class pug extends dog {
  public constructor(breed: string, age: number, color: unknown) {
    super(breed, age, color);
    this.color = pugColors;
  }
}

var blackPug = new pug("pug", 0.8, pugColors[1]);
console.log(blackPug);

class animal {
  private name: string;
  private height: number;
  private constructor(name: string, height: number) {
    this.name = name;
    this.height = height;
  }

  public setName(n: string): string {
    return (this.name = n);
  }

  public getName() {
    return this.name;
  }

  public setHeight(h: number): number {
    return (this.height = h);
  }

  public getHeight() {
    return this.height;
  }
}

const penguin = new (animal as any)();
penguin.setName("penguin");
penguin.setHeight(3.2);
console.log(penguin.getName());

class parentClass {
  protected person: string;
  protected constructor(person: string) {
    this.person = person;
  }
}

class childClass extends parentClass {
  protected constructor(person: string) {
    super(person);
  }
}

class grandChild extends childClass {
  public constructor(person: string) {
    super(person);
  }
}

var myVariable = new grandChild("person");
console.log(myVariable);
