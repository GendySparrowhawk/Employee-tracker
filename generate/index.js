const mySql = require('mysql2');
const db = require('../db/connection');

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


        const department_id = departmentRow[0].id;

        console.log(department_id)

        const [rows, fields] = await db.promise().query('INSERT INTO part (title, salery, department_id) VALUES (?, ?, ?)'[answers.title, answers.salery, department_id]);

        return console.table(rows);
    } catch (err) {
        console.error('Failed to create Role: ', err);
    }
};

async function getRoles() {
    try {
        const [rows] = db.promise().query('SELECT title FROM part');
        return rows.map(part => part.title);
    } catch (err) {
        console.error("Failed to get roles", err);
    }
};

module.exports = {
    getAllDepartments,
    getAllRoles,
    getAllEmployees,
    createNewDepartment,
    getDepartments,
    createNewRole,
    getRoles
};