/*

============================================

; Title:  Discussion 5.1.js

; Author: Darius Dinkins

; Date:   08 Mar 2020

; Modified by:

; Description: Fixing advanced arrays

===========================================

*/



//Expected Output, "Carolina is the home of the Panthers"



var football = new Map();

football.set('Carolina', 'Panthers');

football.set('Jacksonville', 'Jaguars');

football.delete('Jacksonville');





for (var [key, value] of football) {

  console.log(key + ' is the home of the ' + value);

}


// you need to set ('Carolina', 'Panthers') not get because you cant get something you haven't set.
//you need to L's in Jacksonville on the football.delete line
