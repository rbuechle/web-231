/*
============================================
; Title: Assignment 8.2
; Author: Professor Itskovich
; Date: 07 April 2020
; Modified By: Becca Buechle
; Description: Dynamic HTML Practice
;===========================================
*/

let fruits =[
  {
    id:"Strawberries",
    type:"Aggregate fruit -",
  },
  {
    id:"Pineapple",
    type:"Tropical Fruit -",
  },
  {
    id:"Lemon",
    type:"Citrus -",
  },
  {
    id:"Watermelon",
    type:"Mellon -",
  },
  {
    id:"Coconut",
    type:"Drupe -",
  }

];

// Iterates the fruit array and prints values to a HTML UL
  var out = "<h2>List of Fruits</h2><ul>";
    for (var i = 0; i < fruits.length; i++) {
        out += "<li><b>" + fruits[i].type + "</b> " + fruits[i].id + "</li>";
    }
    out += "</ul>";

    document.getElementById('fruits').innerHTML = out;
