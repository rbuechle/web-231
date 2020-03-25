/*
============================================
; Title: Assignment 6.2
; Author: Becca Buechle
; Date: 24 March 2020
; Modified By:
; Description: Exception Handling debugg
;===========================================
*/

//header info for assignment
const header = require('../buechle-header.js');
console.log (header.display("Rebecca", "Buechle", "6.2_Exception_Handling"));
console.log("\n");

//trying to change a constant
try
{
const x = 0;
x = x + 1;
}
//output error
catch(err)
{
console.log("Catch clause: " + err.message);
}
//printing to dev console
finally
{
console.log("Finally clause reached...");
}
