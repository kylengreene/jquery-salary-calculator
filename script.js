$('Document').ready(onReady);

function onReady(){
    $('#submit').on('click',submitEmployee);
}

let employeeRoster = [];
let monthlyCost = 0;

function submitEmployee(){
    console.log('in submit employee');
    let newEmployee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        idNumber: $('#idIn').val(),
        jobTitle: $('#jobTitleIn').val(),
        annualSalary: $('#annualSalaryIn').val()
    }

    $('#firstNameIn').val( '' );
    $('#lastNameIn').val( '' );
    $('#idIn').val( '' );
    $('#jobTitleIn').val( '' );
    $('#annualSalaryIn').val( '' );

    employeeRoster.push(newEmployee);

    console.log(employeeRoster);
    displayEmployees();
    calculateMonthlySalary();
    let el = $('#monthlySalary');

    el.empty();

    el.append(`${monthlyCost}`);
   
}

function displayEmployees () {
    let el = $('#employeesOut');
    
    el.empty();

    for (let i = 0; i < employeeRoster.length; i++){
        el.append(`<li> ${employeeRoster[i].firstName} ${employeeRoster[i].lastName} : ${employeeRoster[i].idNumber}  ${employeeRoster[i].jobTitle} $${employeeRoster[i].annualSalary}`);
    }


    
}

function calculateMonthlySalary (){
    let tempCalc = 0;
    for (let i = 0; i < employeeRoster.length; i++) {
       tempCalc += (employeeRoster[i].annualSalary / 12)
    }

    monthlyCost = tempCalc;

}