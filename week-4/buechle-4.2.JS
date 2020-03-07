/*
============================================
; Title: Assignment 4.2
; Author: Becca Buechle
; Date: 14 February 2020
; Modified By:
; Description: Array Loop with fruits
;===========================================
*/

//prints header
const header = require('../buechle-header.js');
console.log (header.display("Rebecca", "Buechle", "4.2_Arrays"));
console.log("\n");

//fruits in an array
var fruit = ["Pineapple", "Apple", "Orange", "Strawberry", "Peach"];
//array length
var arrayLength = fruit.length;

//array loop
function getFruit(fruitArray)
{
  for (i=0; i<arrayLength; i++)
  {
    console.log(fruitArray[i]);
  }
}

//function call
getFruit(fruit);
