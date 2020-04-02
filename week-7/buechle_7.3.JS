/*
============================================
; Title: Assignment 7.3
; Author: Becca Buechle
; Date: 27 March 2020
; Modified By:
; Description: Client Side JavaScript Practice
;===========================================
*/

//ordered shopping list of fruit
document.write(
  "<h1>SHOPPING LIST  v.1</h1>" +
  "<ol>" +
    "<li>Oranges</li>" +
    "<li>Apples</li>" +
    "<li>Pears</li>" +
    "<li>Limes</li>" +
    "<li>Lemons</li>" +
  "</ol>"
);

window.onload = createTable;

// Shopping list of fruits made into an HTML table
function createTable(){
  document.getElementById("shopping").innerHTML =
    "<h1>SHOPPING LIST v.2</h1>" +
    "<table>" +
      "<tr>" +
        "<th>ID</th>" +
        "<th>Item</th>" +
      "</tr>" +
      "<tr>" +
        "<td>1</td>" +
        "<td>Oranges</td>" +
      "</tr>" +
      "<tr class='even'>" +
        "<td>2</td>" +
        "<td>Apples</td>" +
      "</tr>" +
      "<tr>" +
        "<td>3</td>" +
        "<td>Pears</td>" +
      "</tr>" +
      "<tr class='even'>" +
        "<td>4</td>" +
        "<td>Limes</td>" +
      "</tr>" +
      "<tr>" +
        "<td>5</td>" +
        "<td>Lemons</td>" +
      "</tr>" +
    "</table>"
  ;
}
