

/*============================================

; Title:  Brumfield-4.1

; Author: W3schools / Joanna Brumfield

; Date:   March 8, 20202020

; Modified By: Becca Buechle

; Description: Returns a new array using the map() function
; after passing each element in the original array to a defined
; function (myFunction()) which multiplies each value
; by 2.

===========================================*/


var numbers1 = [45, 4, 9, 16, 25];

var numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {

  console.log('value: ' + value * 2 + ' index: ' + index);

}

// First error is that your parameter has an s on myFuctions but it should just be myfunction to match.
// Second error you have a grave instead of a single quotation on value. This one was definitely harder to see!
//third you have a comma after the 2 in the console log.
