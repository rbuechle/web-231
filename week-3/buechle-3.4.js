/*
============================================
; Title: Assignment 3.4
; Author: Professor Krasso
; Date: 04 March 2020
; Modified By: Becca Buechle
; Description: Loop Practice
;===========================================
*/

//header for assignment
const header = require('../buechle-header.js');
console.log (header.display("Rebecca", "Buechle", "3.4_loop_Practice"));
console.log("\n");

var lucky = 7;



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
//Returns a random integer value
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

//prints title for game to dev console
console.log("-- DO THE NUMBERS MATCH GAME --");

//10 iteration loop that generates random number and checks against lucky
for (var i=0; i<10; i++){
  let random = randomNumber();
  if (match(random, lucky))
  {
      logMatch(random, lucky);
  }
  else
  {
      logMismatch(random, lucky);
  }
}
