/*

============================================

; Title:  Discussion 5

; Author: Joanna Brumfield

; Date:   15 March 2020

; Modified By: Becca Buechle

; Description: Logs key value pairs held in 3rd object value

;===========================================

 * Expected output:

[ 'Zakariya', 'Fox', 1439961, 79 ]

*/

const studentGrades = [

  {

    firstName: 'Veronika',

    lastName: 'Drew',

    studentID: 1332279,

    cumulativeGrade: 94,

  },

  {

    firstName: 'Chelsey',

    lastName: 'Mora',

    studentID: 3882273,

    cumulativeGrade: 67,

  },

  {

    firstName: 'Zakariya',

    lastName: 'Fox',

    studentID: 1439961,

    cumulativeGrade: 79,

  }

];

console.log(Object.values(studentGrades[2]));


//error one there needs to be a comma after each data set or it will error out
//error two there should be square brackets instead of circle brackets for the console log to work correctly and since the array starts at 0 instead of 1 it needs to have 2 in the brackets
