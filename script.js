var employeeArray = [];
var salaryArray = [];

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
    salaryArray.push(parseInt(this.annualSalary));
  
} 

function addEmployee() {
    new Employee ($('#firstNameIn').val(), $('#lastNameIn').val(), $('#idNumberIn').val(), $('#titleIn').val(), $('#annualSalaryIn').val() )
    //new Employee Object
    var $showEmployee = $('<div>') // creates JQ Object
    $showEmployee.append($('<p>' + $('#firstNameIn').val() + ' ' + $('#lastNameIn').val() + '<br>' + $('#idNumberIn').val() + '<br>'+ $('#titleIn').val() + '<br>' + $('#annualSalaryIn').val() + '</p>'))
    //appends employee information input to div object
    $('main').append($showEmployee)//adds employee div object to DOM
    
    var total = Math.round(salaryArray.reduce(function(sum, value) {
        return sum + value;
    }, 0)/12); //adds total salaries divides by 12 months rounded to nearest whole number
    var $monthlyTotal = $('<div>')
        $monthlyTotal.append($('<p>' + (total) + '</p>'));
    $('#totalMonthlyCost').append($monthlyTotal)
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idNumberIn').val(''); 
    $('#titleIn').val('');
    $('#annualSalaryIn').val('');//empties the fields after clicking add
    console.log(employeeArray);
    console.log(salaryArray);
    console.log(total);   
} // end addEmployee Function

