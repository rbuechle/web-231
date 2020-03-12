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

//state that we are searching array for
var state = "Washington";
//list of states in an array
var states = ["Colorado", "Texas", "South Dakota", "Washington", "New Mexico"];
//sorts states
var statesSorted = states.sort();
//array that contains the selected state if found
var stateSelected = states.filter(function(x){return getState(x, state)});

//prints the array list on new line
function printArray(array)
{
for(i = 0; i < array.length; i++)
{
console.log(array[i]);
}
}

// compares two strings and returns true if they are the same
function getState(string1, string2){
return string1 == state;
}


//logs to dev console
console.log("-- ORIGINAL ARRAY --");
printArray(states);
console.log("\n");

console.log("-- SORTED ARRAY --");
printArray(statesSorted);
console.log("\n");

console.log("-- SELECTED VALUE --");
printArray(stateSelected);
console.log("\n");
