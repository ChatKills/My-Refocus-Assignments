/* 
    todo: Create an employee system to track how much their employee earn
*/

class Employee {    
    name;
    salary;
    specialty;
    workplace;
    
    constructor() {
        
    }

    introduceEmployee() {
        console.log(`Hi, my name is ${this.name}`);
    }

    employeeSalary() {
        console.log(`${this.name}'s salary is ₽ ${this.salary.toFixed(2)}`);
    }
}

class Developer extends Employee {
    constructor(name, salary, specialty, workplace) {
        super();
        this.name = name;
        this.salary = salary;
        this.specialty = specialty;
        this.workplace = workplace;
        
    }

    employeeSpecialty(){
        console.log(`I am a web developer specializing in ${this.specialty}`);
    }

    employeeWorkPlace() {
        console.log(`I work at ${this.workplace}`);
    }
}

const employee = new Developer("Marc", 1000, "Frontend Development", "MHA");
employee.introduceEmployee();
employee.employeeSalary();
employee.employeeSpecialty();
employee.employeeWorkPlace();