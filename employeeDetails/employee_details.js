const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, job: 'Software Engineer' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, job: 'HR Specialist' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, job: 'Finance Manager' },
    { id: 4, name: 'Ann White', age: 25, department: 'IT', salary: 60000, job: 'Software Engineer' },
    { id: 5, name: 'Tom Brown', age: 40, department: 'Finance', salary: 70000, job: 'Finance Manager' },
    //... More employee records can be added here
  ];

// Function to display all employees
const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
document.getElementById('employeesDetails').innerHTML = totalEmployees;

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
  }

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
     const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID' ;

    }
  }

function addEmployee() {
    const employeeId = employees.length + 1;
    const employeeName = prompt('Enter employee name:');
    const employeeAge = parseInt(prompt('Enter employee age:'));
    const employeeDepartment = prompt('Enter employee department:');
    const employeeSalary = parseFloat(prompt('Enter employee salary:'));
    employees.push({ id: employeeId, name: employeeName, age: employeeAge, department: employeeDepartment, salary: employeeSalary });
    document.getElementById('employeesDetails').innerHTML = `<p>${employeeId}: ${employeeName}: ${employeeName} - ${employeeDepartment} - $${employeeSalary}</p>`;
    }
function displayEmployees() {
    const employeesDisplay = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = employeesDisplay;
  }
function deleteEmployee(employeeId) {
    const employeeIndex = employees.findIndex(employee => employee.id === employeeId);
    if (employeeIndex !== -1) {
    employees.splice(employeeIndex, 1);
    displayEmployees();
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID' ;

    }
}
function updateEmployee() {
    const employeeId = parseInt(prompt('Enter employee ID to update:'));
    const employeeIndex = employees.findIndex(employee => employee.id === employeeId);
    if (employeeIndex !== -1) {
    const employeeName = prompt('Enter new employee name:');
    const employeeAge = parseInt(prompt('Enter new employee age:'));    
    const employeeDepartment = prompt('Enter new employee department:');    
    const employeeSalary = parseFloat(prompt('Enter new employee salary:'));    
    employees[employeeIndex] = { id: employeeId, name: employeeName, age: employeeAge, department: employeeDepartment, salary: employeeSalary };
    displayEmployees();
    }
}