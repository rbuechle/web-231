/*======================================================

; Title:  discussion-6.1.js

; Author: Joanna Brumfield

; Date:   22 March 2020

; Modified By: Becca Buechle

; Description: Demonstrations accessing object values via dot notation with errors

;=====================================================

*/

var employee1 = {

  firstName: 'Elisse',

  lastName: 'Bevitori',

  age: 32,

  employeeNum: 845920,

  position: "Retail",

  salary: 28000,

};

console.log('Position: ' + employee1.position);

// on the retail string you used tilde instead of quotes
//in the console log you need a + between the string and employee
//employee in the console log should be changed to employee1 since that is what you named your var. so that it will work correctly
