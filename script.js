var employeeArray = [];
var salary = [];

$(document).ready(readyNow);

function readyNow() {
    $('#add').on('click', addEmployee);//adds employee to array when button is clicked  
console.log(salary);
}
function Employee (firstNameIn, lastNameIn, idNumberIn, titleIn, annualSalaryIn) {
    this.firstName = firstNameIn;
    this.lastName = lastNameIn;
    this.idNumber = idNumberIn;
    this.title = titleIn;
    this.annualSalary = annualSalaryIn;
    employeeArray.push( this);
} //object constructor creates employee using input data and pushes employee object into array

function addEmployee() {
    new Employee ($('#firstNameIn').val(), $('#lastNameIn').val(), $('#idNumberIn').val(), $('#titleIn').val(), $('#annualSalaryIn').val() )
    //new Employee added and pushed into an array
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idNumberIn').val(''); 
    $('#titleIn').val('');
    $('#annualSalaryIn').val('');//empties the fields after clicking add
    console.log(employeeArray);
    
    var $showEmployee = $('<div>')
        $showEmployee.append($('<p>Employee</p>'))
    
    $('main').append($showEmployee);
} // end addEmployee Function
  


