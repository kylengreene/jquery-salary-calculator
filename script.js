$('Document').ready(onReady);

function onReady(){
    $('#submit').on('click',submitEmployee);
}

let employeeRoster = [];

function submitEmployee(){
    console.log('in submit employee');
    let newEmployee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        idNumber: $('#idIn').val(),
        jobTitle: $('#jobTitleIn').val(),
        annualSalary: $('#annualSalaryIn').val()
    }
    employeeRoster.push(newEmployee);
    
    console.log(employeeRoster);
    
    
}