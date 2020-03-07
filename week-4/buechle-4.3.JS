/*
============================================
; Title: Assignment 4.3
; Author: Becca Buechle
; Date: 06 March 2020
; Modified By:
; Description: Array with filtering
;===========================================
*/

//header info for assignment
const header = require('../buechle-header.js');
console.log(header.display("Rebecca", "Buechle", "4.3_Filtering"));
console.log("\n");

//string with subaru cars
var vroomVroom = ["WRX", "STI", "Forester", "Crosstrek", "Legacy"];
var arrayLength = vroomVroom.length;

//function that prints the array list of cars
function printArray(array)
{
  for (i=0; i<arrayLength; i++)
  {
    console.log(array[i]);
  }
}

//test of string values against array values
function getValue(array, string){
  console.log("-- SELECTED VALUE --");
  for (i=0; i<arrayLength; i++){
    if (string === vroomVroom[i]){
      console.log(string);
    }
  }
  console.log("\n");
}

//list info print to dev console
console.log("-- DISPLAYING ARRAY ITEMS --");
printArray(vroomVroom);
console.log("\n");

//calls items in the array
getValue(vroomVroom,"Forester");
getValue(vroomVroom, "WRX");


