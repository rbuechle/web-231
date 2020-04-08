  /*
============================================
; Title: Assignment 8.4
; Author: Professor Itskovich & Becca Buechle
; Date: 07 April 2020
; Modified By:
; Description: Putting it all together jQuery + DOM Practice
;===========================================
*/

// Employee constructor
function Employee(id, firstName, lastName, title){
this.id = id;
this.firstName = firstName;
this.lastName = lastName;
this.title = title;
};
//array of employees
var employees =[
  new Employee(1, "Billy", "Bradshaw", "Student"),
  new Employee(2, "Jack", "Black", "Actor"),
  new Employee(3, "Kristel", "Morris", "Manager"),
  new Employee(4, "Mable", "Able", "Shop Owner"),
  new Employee(5, "Tom", "Nook", "Town Mayor")
]
//prints employees into an alert
function getEmployee(x){
  let employee;
  for (i=0; i <employees.length; i++) {
    if(x == employees[i].id){
      employee = employees[i];
      alert(employee.id + " " + employee.firstName + " " + employee.lastName + " " + employee.title);
    }
  }
}
//builds an HTML table and outputs employees array
var output =
"<table>" +
  "<tr>" +
    "<th>ID</th>" +
    "<th>First Name</th>" +
    "<th>Last Name</th>" +
    "<th>Title</th>" +
  "</tr>";
    for (var i = 0; i < employees.length; i++) {
        output += "<tr><td>" + employees[i].id +"</td><td>" + employees[i].firstName + "</td><td>" + employees[i].lastName + "</td><td>" + employees[i].title + "</td></tr>";
    }
  output += "</table>";

  document.getElementById("emps").innerHTML = output;

//onClick jQuery event with popup of selected employee
  $("table tr").click(function(){
    let employee = $(this).find("td:first").html();
    getEmployee(employee);
  })
