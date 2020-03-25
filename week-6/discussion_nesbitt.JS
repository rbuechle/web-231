/*======================================================
; Title:  nesbitt-discussion-6.1.js
; Author: Michelle Nesbitt
; Date:   21 March 2020
; Modified By: Becca Buechle
; Description: Demonstrates errors with objects creation
;=====================================================
*/

var wallplate = {
  numberGangs: 2,
  ports: 15,
  outletIncluded: "No",
  color: "White",
  dimensions: "4.5x4.5",
};
console.log(wallplate);

//first error you were missing the */ for the end of the assignment header
//There were several semicolon instead of colons being used in the properties.
//for the dimensions property it either needs to be a string or it needs to be broken down into two different properties one for width and one for height
//then I just added a console log so t hat we could see the results.
