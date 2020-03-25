/*
============================================
; Title: Assignment 6.1
; Author: Becca Buechle
; Date: 20 March 2020
; Modified By:
; Description: Practice with objects and built-in objects with two errors to find.
;===========================================
*/

//salad bar with arrays and boolean
let saladBar = {
  fruit: ["Strawberries", "Pineapple", "Cherries", "Watermelon"],
  toppings: {"Sunflower seeds", "Hard-boiled eggs", "Olives"},
  vegetables: "Cucumbers",
  ranchDressing: true,
//greeting that prints in the dev console
  greeting: function() {
    console.log("Hello, guests our salad bar has many items to choose from!");
    console.log("\n");
  };
  //arrays printed each on a new line to the dev console
  menu: function() {
    this.fruit.forEach(function(x){console.log(x)});
    this.toppings.forEach(function(x){console.log(x)});
    console.log(this.vegetables);
    console.log("We have Ranch dressing: " + this.ranchDressing);
  },
};

  saladBar.greeting();
  saladBar.menu();

