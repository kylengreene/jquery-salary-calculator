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
    displayEmployees();
    
}

function displayEmployees () {
    let el = $('#employeesOut');
    
    el.empty();

    for (let i = 0; i < employeeRoster.length; i++){
        el.append(`<li> ${employeeRoster[i].firstName} ${employeeRoster[i].lastName} : ${employeeRoster[i].idNumber}  ${employeeRoster[i].jobTitle} $${employeeRoster[i].annualSalary}`);
    }


    
}