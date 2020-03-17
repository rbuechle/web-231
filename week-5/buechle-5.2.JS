/*
============================================
; Title: Assignment 5.2
; Author: Becca Buechle
; Date: 16 March 2020
; Modified By:
; Description: forEach built-in function practice.
;===========================================
*/

//header for assignment
const header = require('../buechle-header.js');
console.log (header.display("Rebecca", "Buechle", "5.2_"));

//array with favorite foods
var favoriteFoods = ["Steak", "Pasta", "Tacos", "Thai", "Enchiladas"];
//calls function once for each element in array
favoriteFoods.forEach(printItem);

//prints items in the array to dev console
function printItem(food){
  console.log(food);
}
