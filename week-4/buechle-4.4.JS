/*
============================================
; Title: Assignment 4.4
; Author: Becca Buechle
; Date: 06 March 2020
; Modified By:
; Description: Practice with Array Filtering
;===========================================
*/

//header info for assignment
const header = require('../buechle-header.js');
console.log(header.display("Rebecca", "Buechle", "4.4_Filtering"));
console.log("\n");

var state = "Washington";
var states = ["Colorado", "Texas", "South Dakota", "Washington", "New Mexico"];
var statesSorted = states.sort();
var stateSelected = states.filter(function(x){return getState(x, state)});

function printArray(array)
{
for(i = 0; i < array.length; i++)
{
console.log(array[i]);
}
}

function getState(string1, string2){
return string1 == state;
}

console.log("-- ORIGINAL ARRAY --");
printArray(states);
console.log("\n");

console.log("-- SORTED ARRAY --");
printArray(statesSorted);
console.log("\n");

console.log("-- SELECTED VALUE --");
printArray(stateSelected);
console.log("\n");
