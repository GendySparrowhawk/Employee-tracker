const inquirer = require("inquirer");
const { getAllDepartments } = require('./generate');

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

function init() {
    inquirer.prompt(prompt).then(async (answer) => {
      switch (answer.choice) {
        case 'View all Departments':
          try {
            const departments = await getAllDepartments();
            console.log(departments);
          } catch (error) {
            console.error('Error:', error);
          }
          break;
      }
    });
  }
init();
