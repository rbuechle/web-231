/*
============================================
; Title: Assignment 5.3
; Author: Professor Itskovich
; Date: 16 March 2020
; Modified By: Becca Buechle
; Description: forEach built-in function practice.
;===========================================
*/

//header for assignment
const header = require('../buechle-header.js');
console.log (header.display("Rebecca", "Buechle", "5.3_object_collections"));
console.log("\n");

//array with composers info
var famousComposer = [
{
  firstName:"Ludwig van",
  lastName:"Beethoven",
  genre:"Classical",
  rating: 10,
},

{
  firstName:"Wolfgang",
  lastName:"Mozart",
  genre:"Classical",
  rating: 10,
},

{
  firstName:"Johann",
  lastName:"Bach",
  genre:"Classical",
  rating: 10
},

{
  firstName:"Joseph",
  lastName:"Haydn",
  genre:"Classical",
  rating: 7,
},

{
  firstName:"Franz",
  lastName:"Schubert",
  genre:"Classical",
  rating: 6,
},
];

//header for composers array
console.log("-- COMPOSERS --");

//for each function and console log with strings
famousComposer.forEach(function(composer) {console.log("Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating)});
