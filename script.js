var employeeArray = [];
//put interactive functions here - calculate button
$(document).ready(readyNow);

function readyNow() {
    console.log('ready');
    console.log(employeeArray);
    $('#add').on('click', addEmployee);
}

function addEmployee() {
    this.idNumber = idNumberIn;
    new Employee ($('#firstNameIn').val(), $('#lastNameIn').val(), $('#idNumberIn').val(), $('#titleIn').val(), $('#annualSalaryIn').val());
    //new Employee added and pushed into an array
}



function Employee (firstNameIn, lastNameIn, idNumberIn, titleIn, annualSalaryIn) {
    this.firstName = firstNameIn;
    this.lastName = lastNameIn;
    this.idNumber = idNumberIn;
    this.title = titleIn;
    this.annualSalary = annualSalaryIn;
    employeeArray.push( this);
} //object constructor creates employee using input data and pushes employee object into array

