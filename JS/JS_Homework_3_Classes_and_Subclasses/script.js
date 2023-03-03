/* 
    todo: Create an employee system to track how much their employee earn
*/
const projects = [];


class Employee {      
    constructor(name, salary, specialty, workplace) {
        this.name = name;
        this.salary = salary;
        this.specialty = specialty;
        this.workplace = workplace;
    }

    employeeIntro() {
        console.log(`Hi, my name is ${this.name}`);
    }

    employeeSalary() {
        console.log(`${this.name}'s salary is ₽ ${this.salary.toFixed(2)}`);
    }

    employeeSpecialty(){
        console.log(`I specialize in ${this.specialty}.`);
    } 

    employeeWorkPlace() {
        console.log(`I work at ${this.workplace}`);
        console.log("==========0==========");
    }
}

class Developer extends Employee {
    constructor(name, salary, specialty, workplace) {
        super(name, salary, specialty, workplace);
        
        
    }
    callSpecialty(){
        this.employeeSpecialty();
    } 
};

class HumanResources extends Employee {
    constructor(name, salary, specialty, workplace) {
        super(name, salary, specialty, workplace);        
    }

    callSpecialty(){
        this.employeeSpecialty();
        console.log(`I hire employees for the company.`);
    }

};

class TeamLead extends Employee {
    constructor(name, salary, specialty, workplace) {
        super(name, salary, specialty, workplace);        
    }

    callSpecialty(){
        this.employeeSpecialty();
        console.log(`I give insturcitons to other employees.`);
    }

};

class Tester extends Employee {
    constructor(name, salary, specialty, workplace) {
        super(name, salary, specialty, workplace);     
    }

    callSpecialty(){
        this.employeeSpecialty();
        console.log(`I am responsible for passing and rejecting code.`);
    }

};

class Marketer extends Employee {
    constructor(name, salary, specialty, workplace) {
        super(name, salary, specialty, workplace);        
    }

    callSpecialty(){
        this.employeeSpecialty();
        console.log(`I am responsible for promoting the company and showing products to customers.`);
    }

};

class ProductOwner extends Employee {    
    constructor(name, salary, specialty, workplace) {
        super(name, salary, specialty, workplace);        
    }
    callSpecialty(){
        this.employeeSpecialty();
        console.log(`I responsible for creating new projects.`);
    }

    createNewProject(newProject) {
        projects.push();
        console.log(`New project
            -------------
            Project name: ${newProject.projectName}  
            Company name: ${newProject.companyName}  
            Project Length: ${newProject.numOfDays} days
        `);
    }

};


const employee = new Developer("Skua", 1000, "Frontend Development", "MHA");
employee.employeeIntro();
employee.employeeSalary();
employee.callSpecialty();
employee.employeeWorkPlace();

const humanResource = new HumanResources("Duck", 2000, "Human Resouces", "MHA");
humanResource.employeeIntro();
humanResource.employeeSalary();
humanResource.callSpecialty();
humanResource.employeeWorkPlace();

const teamLead = new TeamLead("Eagle", 1000, "Team Lead", "MHA");
teamLead.employeeIntro();
teamLead.employeeSalary();
teamLead.callSpecialty();
teamLead.employeeWorkPlace();

const tester = new Tester("Falcon", 500, "Testing", "MHA");
tester.employeeIntro();
tester.employeeSalary();
tester.callSpecialty();
tester.employeeWorkPlace();

const marketer = new Marketer("Dove", 1000, "Marketing", "MHA");
marketer.employeeIntro();
marketer.employeeSalary();
marketer.callSpecialty();
marketer.employeeWorkPlace();

const productOwner = new ProductOwner("Chicken", 5000, "Product Owner", "MHA");
productOwner.employeeIntro();
productOwner.employeeSalary();
productOwner.callSpecialty();
productOwner.createNewProject({projectName:"Project 1", companyName: "COMPANY 2", numOfDays: 10});
productOwner.employeeWorkPlace();