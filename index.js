const inquirer = require("inquirer");
const { getAllDepartments, getAllRoles, createNewDepartment, getDepartments, createNewRole, getRoles, createNewEmployee, getAllEmployees } = require('./generate');

// const mySql = require('mysql2/promise');
// const db = require('./db/connection');
// const generateTable = require('./functions')

const prompt = [
    {
        type: 'list',
        message: 'Welcome, What would you like to do?',
        name: 'choice',
        choices: ['View all Departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
    }
];

const departmentQuestions = [
    {
        type: 'input',
        message: 'What is the departments title?',
        name: 'title'
    }
];

const roleQuestions = [
    {
        type: 'input',
        message: 'What is the roles titile?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'how much will you rake in on this job?',
        name: 'salary'
    },
    {
        type: 'list',
        message: 'What department is this role in?',
        name: 'choice',
        choices: []
    }
];

const employeeQuestions = [
    {
        type: 'input',
        message: 'What is the employees 1st name?',
        name: 'first_name'
    },
    {
        type: 'input',
        message: 'what is the employees last name?',
        name: 'last_name'
    },
    {
        type: 'list',
        message: 'what is the employees role?',
        name: 'choice',
        choices: []
    },
    {
        type: 'list',
        message: 'who is your manager?',
        name: 'is_manager',
        chosices: []
    }
]


function init() {
    inquirer.prompt(prompt).then(async (answer) => {
        switch (answer.choice) {
            case 'View all Departments':
                try {
                    const departments = await getAllDepartments();
                    console.log(departments);

                    init();

                } catch (err) {
                    console.error('Failed to get departments: ', err);
                }
                break;
        }
        switch (answer.choice) {
            case 'view all roles':
                try {
                    const roles = await getAllRoles();
                    console.log(roles);

                    init();

                } catch (err) {
                    console.error('Failed to get roles: ', err);
                }
                break;
        }
        switch (answer.choice) {
            case 'view all employees':
                try {
                    const employees = await getAllEmployees();
                    console.log(employees);

                    init();

                } catch (err) {
                    console.error('Failed to get Employees: ', err);

                }
                break;
        }
        switch (answer.choice) {
            case 'add a department':
                try {
                    const answers = await inquirer.prompt(departmentQuestions);
                    const newDepartment = await createNewDepartment(answers);
                    console.log(newDepartment);

                    init();

                } catch (err) {
                    console.error(`Fialed to create department: ${newDepartment} `, err);
                }
                break;
        }
        switch (answer.choice) {
            case 'add a role':
                try {
                    const departments = await getDepartments();
                    roleQuestions[2].choices = departments;

                    const answers = await inquirer.prompt(roleQuestions);

                    const newRole = await createNewRole(answers);
                    console.log(newRole);

                    init();

                } catch (err) {
                    console.error(`failed to create Role: ${newRole} `, err);
                }
                break;
        }
        switch (answer.choice) {
            case 'add an employee':
                try {
                    const roles = await getRoles();
                    employeeQuestions[2].choices = roles;

                    const answers = await inquirer.prompt(employeeQuestions);

                    const newEmployee = await createNewEmployee(answers);
                    console.log(newEmployee);

                    init();

                } catch (err) {
                    console.error(`Failed to add employee: ${newEmployee} `, err)
                }
                break;
        }
        switch (answer.chioce){
        case 'update an employee role':
        try {
            const employees = await getAllEmployees();
            updateQuestions[0].choices = employees;

            const answers = await inquirer.prompt(updateQuestions);

            const updatedEmployee = await updateEmployee(answers);
            console.log(updatedEmployee);

        } catch (err) {
            console.error('Failed to update employee');
        }
    }
    });
}


init();
