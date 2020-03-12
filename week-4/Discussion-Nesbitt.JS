/*
============================================

; Title: nesbitt-discussion-4.1.js

; Author: Michelle Nesbitt

; Date: 08 Mar 2020

; Modified by: Becca Buechle

; Description: Array with 4 errors to find

===========================================

*/



var myArray = ["Michelle", "Steve", "John", "Nancy"];


for (var i = 0; i < myArray.length; i++) {

console.log(myArray[i+1]);

}

//First error you have [] square brackets right after naming myArray which you do not need.
//Second you should have your array wrapped in square brackets instead of curly brackets.
//Third your console log it should be called myArray instead of just array
//Forth in your for statement it should be myArray there as well.
//Fifth you need to remove the = in the for statement because you can do less-than or equal

