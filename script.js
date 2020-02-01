$('Document').ready(onReady);

function onReady(){
    $('#submit').on('click', submitEmployee);
    $('#employeesOut').on('click', '.item', deleteThis);
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
        el.append(`
        <tr>
        <td>${employeeRoster[i].firstName}</td> 
        <td>${employeeRoster[i].lastName}</td> 
        <td>${employeeRoster[i].idNumber}</td> 
        <td>${employeeRoster[i].jobTitle}</td>
        <td>${employeeRoster[i].annualSalary}</td>
        <td class="item"><button class="delete">Delete</button></td>
        </tr>`);
    }


    
}

function calculateMonthlySalary (){
    let tempCalc = 0;
    for (let i = 0; i < employeeRoster.length; i++) {
       tempCalc += (employeeRoster[i].annualSalary / 12)
    }
    monthlyCost = tempCalc;
    if (monthlyCost > 20000) {
        document.getElementById("monthlyTotalSalary").style.backgroundColor = "red";
    }
}

function deleteThis() { 
    console.log('in delete');
    let el = $(this).parent();
    console.log(el);
    
    el.remove();
    
}