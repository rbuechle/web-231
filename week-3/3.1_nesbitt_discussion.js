/*
============================================
; Title:  discussion-3.1.js
; Author: Michelle Nesbitt
; Date:   27 February 2020
; Modified By: Becca Buechle
; Description: Sample of errors in Javascript
;===========================================
*/
var myValue = 670;

for (var i = 0; i > myValue; i++){
  console.log(i);
}


//1. The first thing I noticed was that you had commas instead of semicolon's by the zero and at the end of myValue

//2. it wont log to the console log unless you use a less than sign

//3. if the program actually worked it would continuously go down pretty much forever because of the i-- which doesn't really make any since because  the program will never be greater than 670.

//Side note I got it to run to -20 thousand before it crashed.
