/*
============================================
; Title: Assignment 8.3
; Author: Professor Itskovich
; Date: 07 April 2020
; Modified By: Becca Buechle
; Description: jQuery Practice
;===========================================
*/

let fruits =[
  {
    id:"Strawberries",
    type:"Aggregate Fruit",
  },
  {
    id:"Pineapple",
    type:"Tropical Fruit",
  },
  {
    id:"Lemon",
    type:"Citrus",
  },
  {
    id:"Watermelon",
    type:"Mellon",
  },
  {
    id:"Coconut",
    type:"Drupe",
  }

];

// Iterates the fruit array and prints values to a table
var out =
"<table>" +
  "<tr>" +
    "<th>ID</th>" +
    "<th>Type</th>" +
  "</tr>";
    for (var i = 0; i < fruits.length; i++) {
        out += "<tr><td class='fruitId'><a href='#'>" + fruits[i].id +"</a></td><td>" + fruits[i].type + "</td></tr>";
    }
    out += "</table>";

    document.getElementById('fruits').innerHTML = out;

//Makes h1 and paragraph hide and show on click
$("button").click(function(){
  $("#toggle").toggle( "slow", function() {
  });
});
//Popup with fruit ID and Type
$(".fruitId").click(function (event) {
  var fruitId = $(this).text();
  var fruitType = $(this).closest("td").next().text();
  alert("Fruit ID: " + fruitId + "\n" + "Fruit Type: " + fruitType );
});
