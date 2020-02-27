/*
============================================
; Title: Assignment 2.4
; Author: Becca Buechle
; Date: 14 February 2020
; Modified By: Becca Buechle
; Description: practice with functions
;===========================================
*/

// creates header for assignment
const header = require('../buechle-header.js')

//local vars
var firstName = "Becca";
var lastName = "Buechle";
var year = 2020;
var month = 01;
var day = 26;
var number = 75.5559;
var numOfFixedPositions = 1;
var string = "32";
var money = "10000.01";

//outputs full name as string
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

//the date
function dateWriter(year, month, day) {
  return new Date(year, month, day);
}

//formats how many decimal points
function formatNumber(number, numOfFixedPositions) {
  return number.toFixed(numOfFixedPositions);
}

//converts string to integer
function convertToInt(string) {
  return parseInt(string, 10);
}
//converts string to float
function convertToFloat(string) {
  return parseFloat(string);
}

// logs header info to dev console
console.log (header.display("Rebecca", "Buechle", "2.4_functions"));
console.log ("\n");

//logs function output to dev console
console.log ("Hello my name is " + fullName(firstName, lastName) + "!");
console.log ("\n");
console.log ("Today's date is " + dateWriter(year, month, day) + " and the current temperature is " + formatNumber(number, numOfFixedPositions) + " degrees.");
console.log ("\n");
console.log ("I am " + convertToInt(string) + " years old and my savings account goal is " + convertToFloat(money) + " dollars.");
