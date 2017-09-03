
var employeeArray = [];
function employeeData (firstNameIn, lastNameIn, idNumberIn, titleIn, annualSalaryin) {
    this.firstName = firstNameIn;
    this.lastName = lastNameIn;
    this.idNumber = idNumberIn;
    this.annualSalary = annualSalaryin;
    employeeArray.push( this);
} //object constructor creates employee using input data and pushes employee object into array

