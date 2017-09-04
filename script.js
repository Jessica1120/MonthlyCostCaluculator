var employeeArray = [];
var salaryArray = [];
var salaryTotals = 0;

$(document).ready(readyNow);

function readyNow() {
    $('#add').on('click', addEmployee);//adds employee to array when button is clicked  
}

function Employee (firstNameIn, lastNameIn, idNumberIn, titleIn, annualSalaryIn) {
    this.firstName = firstNameIn;
    this.lastName = lastNameIn;
    this.idNumber = idNumberIn;
    this.title = titleIn;
    this.annualSalary = annualSalaryIn;
    employeeArray.push( this);
    salaryArray.push (this.annualSalary);
  
} //object constructor creates employee using input data and pushes employee object into array

function addEmployee() {
    new Employee ($('#firstNameIn').val(), $('#lastNameIn').val(), $('#idNumberIn').val(), $('#titleIn').val(), $('#annualSalaryIn').val() )
    //new Employee Object
    var $showEmployee = $('<div>') // creates JQ Object
    $showEmployee.append($('<p>' + $('#firstNameIn').val() + ' ' + $('#lastNameIn').val() + '<br>' + $('#idNumberIn').val() + '<br>'+ $('#titleIn').val() + '<br>' + $('#annualSalaryIn').val() + '</p>'))
    //appends employee information input to div object
    $('main').append($showEmployee)//adds employee div object to DOM
    
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idNumberIn').val(''); 
    $('#titleIn').val('');
    $('#annualSalaryIn').val('');//empties the fields after clicking add
    console.log(employeeArray);
    console.log(salaryArray);   
} // end addEmployee Function
  
//function costCalculator() {
  //  parseInt(this.annualSalary);
    //salaryTotals += this.annualSalary; ---remember this
    //console.log(salaryTotals)
//}

//function costCalculator() {
   // var salary = []
   // for(var i = 0; i<= employeeArray.length; i++) {
   //     console.log(employeeArray[i].annualSalary);
   // };
//}