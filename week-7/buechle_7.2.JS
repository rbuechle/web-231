/*
============================================
; Title: Assignment 7.2
; Author: Becca Buechle
; Date: 27 March 2020
; Modified By:
; Description: Constructor Functions
;===========================================
*/
const header = require('../buechle-header.js');
console.log (header.display("Rebecca", "Buechle", "7.2_Constructor_Functions"));
console.log("\n");

function Employee(id, firstName, lastName, title){
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

var employees = [
  new Employee(1, "Jack", "Bradshaw", "CEO"),
  new Employee(2, "Max", "Bradshaw", "Marketing"),
  new Employee(3, "Robert", "Bradshaw", "Tech Support"),
  new Employee(4, "Justin", "Smith", "Consultation Agent"),
  new Employee(5, "Austyn", "Morris", "Student")
]

for (i = 0; i < employees.length; i++){
  let cur = employees[i];
  console.log(cur.id + " " + cur.firstName + " " + cur.lastName + " "+ cur.title);
}
