/*
============================================
; Title: Assignment 3.2
; Author: Becca Buechle
; Date: 02 March 2020
; Modified By:
; Description: Pattern Matching Functions
;===========================================
*/
const header = require('../buechle-header.js');

//variables
var testVar1 = "Truck";
var testVar2 = "Car";
var testVar3 = "Bike";
var testVar4 = "Bike";
var testVar5 = "Four";
var testVar6 = "Three";

//functions
function match(par1, par2){
    if (par1 === par2)
    {
        return true
    }
    else
    {
        return false
    }
}

function logMismatch(par1, par2){
    console.log(par1 + " and " + par2 + " do not match!");
}

function logMatch(par1, par2){
    console.log(par1 + " and " + par2 + " do match!");
}


//header output for assignment
console.log (header.display("Rebecca", "Buechle", "3.2_pattern_Matching"));


//output for match function
console.log(match("a", "be"));
console.log(match(2,2));

//if else statement with checks for vars
if (match(testVar1, testVar2))
{
    logMatch(testVar1, testVar2);
}
else
{
    logMismatch(testVar1, testVar2);
}

if (match(testVar3, testVar4))
{
    logMatch(testVar3, testVar4);
}
else
{
    logMismatch(testVar3, testVar4);
}

if (match(testVar5, testVar6))
{
    logMatch(testVar5, testVar6);
}
else
{
    logMismatch(testVar5, testVar6);
}
