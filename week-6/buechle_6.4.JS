/*
============================================
; Title: Assignment 6.4
; Author: Peter Itskovich
; Date: 24 March 2020
; Modified By: Becca Buechle
; Description: Nested object literal practice
;===========================================
*/

//header for assignment info
const header = require('../buechle-header.js');
console.log (header.display("Rebecca", "Buechle", "6.4_nested_Object_Literals"));
console.log("\n")

// Nested Objects to create ticket info and employee info
var ticket = {
  id: 404,
  name: "Max Bradshaw",
  dateCreated: new Date(),
  priority: "ASAP",

  person: {
    id: 2020,
    firstName: "Justin",
    lastName: "Smith",
    jobTitle: "Repair Agent",
  }
};

//concatenated string printed to the dev log
console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated.toLocaleDateString() + " and assigned to employee " + ticket.person.firstName + " "+ ticket.person.lastName + " " + "\(" + ticket.person.jobTitle + "\)");
