/*
============================================
; Title: Assignment 1.5
; Author: Becca Buechle 
; Date: 16 February 2020
; Modified By: Becca Buechle
; Description: Program that stores employee info.
;===========================================
*/

//Hire information for Employee's 
var firstName1 = "Max";
var firstName2 = "Jack";
var firstName3 = "Riley";
var lastName1 = "Smith";
var lastName2 = "Bradshaw";
var lastName3 = "Robinson";
var address1 = "952 SW Campus Dr";
var address2 = "111 Foxtail Lane";
var address3 = "6 Junction Rd";
var payRate1 = 12.50;
var payRate2 = 15.50;
var payRate3 = 13.25;
var hireDate1 = new Date(2015,0,1);
var hireDate2 = new Date(2017,3,13);
var hireDate3 = new Date(2020,2,14);

//rate of pay formatted to show one place after decimal
payRate1 = payRate1.toFixed(1);
payRate2 = payRate2.toFixed(1);
payRate3 = payRate3.toFixed(1);

//Formatted dates with slashes
var hireDate1String = hireDate1.getMonth()+1 + "/" + hireDate1.getDate() + "/" + hireDate1.getFullYear();
var hireDate2String = hireDate2.getMonth()+1 + "/" + hireDate2.getDate() + "/" + hireDate2.getFullYear();
var hireDate3String = hireDate3.getMonth()+1 + "/" + hireDate3.getDate() + "/" + hireDate3.getFullYear();

//log of all above information 
console.log(firstName1 + " " + lastName1 + " " + address1);
console.log("$" + payRate1 + "/hr " + hireDate1String);
console.log("\n");
console.log(firstName2 + " " + lastName2 + " " + address2);
console.log("$" + payRate2 + "/hr " + " " + hireDate2String);
console.log("\n");
console.log(firstName3 + " " + lastName3 + " " + address3);
console.log("$" + payRate3 + "/hr " + hireDate3String);

