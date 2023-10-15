// call in mysql and conncetion to database
const mySql = require('mysql2');
const db = require('../db/connection');
const inquirer = require('inquirer');

// funtions that talk directly to the database and will be exported to the top level index.js file.
async function getAllDepartments() {
    try {
        const [rows, fields] = await db.promise().query('SELECT * FROM department');

        return console.table(rows);

    } catch (err) {
        console.error('No departments found: ', err);
    }
};

async function getAllRoles() {
    try {
        const [rows, fields] = await db.promise().query('SELECT * FROM part');

        return rows;
    } catch (err) {
        console.error('no roles found: ', err)
    }
};

async function getAllEmployees() {
    try {
        const [rows, fields] = await db.promise().query('SELECT * FROM employees');

        return rows
    } catch (err) {
        console.error('No employees found: ', err);
    }
};

async function getDepartments() {
    try {
        const [rows] = await db.promise().query('SELECT title FROM department');

        return rows.map(department => department.title);
    } catch (err) {
        console.error('Failed to get departments: ', err);
        throw err;
    }
};

async function createNewDepartment(answers) {
    try {
        const [rows, fields] = await db.promise().query('INSERT INTO department (title) VALUES (?)', [answers.title]);

        return console.table(rows);
    } catch (err) {
        console.error('Faied to create departemnt: ', err);
    }
};

async function createNewRole(answers) {
    try {
        const [departmentRow] = await db.promise().query('SELECT id FROM department WHERE title = ?', [answers.choice]);

        if (departmentRow.length === 0) {
            console.error('No department found')
            return;
        }

        // this gets the id dynamically from the useres choice even tho they only see department titles
        const department_id = departmentRow[0].id;

        console.log(department_id)

        const [rows, fields] = await db.promise().query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [answers.title, answers.salary, department_id]);

        return console.table(rows);
    } catch (err) {
        console.error('Failed to create Role: ', err);
    }
};

// the differecne betweeen getALL functions and 'get__' functions is the later is used to populate the choices of select prompts in inquirer to make sure they are generated dinamically. 
async function getRoles() {
    try {
        const [rows] = await db.promise().query('SELECT title FROM role');
        return rows.map(role => role.title);
    } catch (err) {
        console.error("Failed to get roles", err);
    }
};

async function createNewEmployee(answers) {
    try {
        const [roleRow] = await db.promise().query('SELECT * FROM role WHERE title = ?', [answers.role]);

        if (roleRow.length === 0) {
            return;
        }
        console.error('No role found')
        // this section of the function solves the manager_id issue by leting the user select yes or no to "are they a manager"  if they select no it will ask them "who is their manager?"
        let manager_id = null;
        if (!answers.is_manager) {
            const managers = await getManagers();
            const managerAnswer = await inquirer.prompt({
                type: 'list',
                message: 'Who is this employee\'s manager?',
                name: 'manager',
                choices: managers
            });
            manager_id = managerAnswer.manager.value
        };


        const role_id = roleRow[0].id;
        console.log(manager_id)

        const [rows, fields] = await db.promise().query('INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [answers.first_name, answers.last_name, role_id, manager_id]);

        console.table(rows);

    } catch (err) {
        console.error('failed to create employee', err);
    }
};

async function getManagers() {
    try {
        const [rows] = await db.promise().query('SELECT id, first_name, last_name FROM employees WHERE manager_id IS NULL');
        return rows.map(employee => ({
            name: `${employee.first_name} ${employee.last_name}`,
            value: employee.id,
            employee_id: employee.id
        }))
        
    
    } catch (err) {
        console.error('Failed to get managers', err);
    }
};

async function updateEmployee(answers) {
    try{
        const [roleRow] = await db.promise().query('SELECT * FROM role WHERE title = ?', [answers.role]);

        if (roleRow.length === 0) {
            return;
        }
        const [rows, fields] = await db.promise().query('UPDATE employees SET role_id = ? WHERE first_name = ?'[role_id, answers.employee])  

        console.table(rows);
      } catch (err) {
        console.error("failed to updae employee", err);
      }
};

async function getEmployees() {
    try {
        const [rows] = await db.promise().query('SELECT first_name FROM employees');
        return rows.map(employee => employee.first_name);
    } catch (err) {
        console.error("Failed to get roles", err);
    }
};


// export fucntions for use elsewhere
module.exports = {
    getAllDepartments,
    getAllRoles,
    getAllEmployees,
    createNewDepartment,
    getDepartments,
    createNewRole,
    getRoles,
    createNewEmployee,
    getManagers,
    updateEmployee,
    getEmployees
};