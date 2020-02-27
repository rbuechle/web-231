/*
============================================
; Title: Assignment 2.3
; Author: Becca Buechle
; Date: 22 February 2020
; Modified By: Becca Buechle
; Description: Storing function property then printing function property.
;===========================================
*/
//creates header for assignment
const header = require('../buechle-header.js');

// function properties
myName.Becca = "Becca";

// functions
function myName() {
    return myName.Becca;
}

//output to the dev console
console.log (header.display("Rebecca", "Buechle", "2.3_function_Properties"));
console.log('\n');
console.log("Hello " + myName() + " Buechle!");


