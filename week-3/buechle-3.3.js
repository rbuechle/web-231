/*
============================================
; Title: Assignment 3.3
; Author: Professor Krasso
; Date: 03 March 2020
; Modified By: Becca Buechle
; Description: Control Statements
;===========================================
*/
//header for assignment
const header = require('../buechle-header.js');
console.log (header.display("Rebecca", "Buechle", "2.3_function_Properties"));

//var for switch statement testing
let eventKeyCode = 13;

console.log("\n");

//switch statement for eventKeyCode
switch (eventKeyCode) {
  case 13:
    console.log('The enter key was pressed.');
    break;
  case 16:
    console.log('The shift key was pressed.');
    break;
  case 32:
    console.log('The spacebar key was pressed.');
    break;
  case 8:
    console.log('The backspace / delete key was pressed.');
    break;
  default:
    console.log('Unrecognized key.');
    break;
}








