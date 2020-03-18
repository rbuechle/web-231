/*
============================================
; Title: Assignment 5.4
; Author: Becca Buechle
; Date: 17 March 2020
; Modified By:
; Description:  Practice with filtering and reducing complex data structures.
;===========================================
*/

//header for assignment
const header = require('../buechle-header.js');
console.log (header.display("Rebecca", "Buechle", "5.4_filtering"));
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

  //creates new array containing ratings and last name
  let byRating = famousComposer.map((composer) => {return {rating: composer.rating, lastName: composer.lastName}});
  //create new array containing genre and last name
  let byGenre = famousComposer.map((composer) => {return {genre: composer.genre, lastName: composer.lastName}});

// COMPOSER BY RATING header
console.log("-- COMPOSER BY RATING --");

//for each function and console log with concatenated strings
  byRating.forEach(function(composer) {console.log("Rating: " + composer.rating + "\n" + "Composer: " + composer.lastName + "\n")});

  //COMPOSER BY GENRE header
console.log("-- COMPOSER BY GENRE --");

//for each function and console log with concatenated strings
  byGenre.forEach(function(composer) {console.log("Genre: " + composer.genre + "\n" + "Composer: " + composer.lastName + "\n")});
