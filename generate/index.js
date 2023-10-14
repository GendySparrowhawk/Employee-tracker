const mySql = require('mysql2');
const db = require('../db/connection');

async function getAllDepartments() {
    try {
      const [rows, fields] = await db.promise().query('SELECT * FROM department');

      return rows;
      
    } catch (err) {
      console.error('No departments found: ', err);
    }
  };
  
async function getAllRoles() {
    try {
        const [rows, fields] = await db.execute('SELECT * FROM part');
        return rows;
    } catch (err) {
        console.error('no roles found: ', err)
    }
};
  
  module.exports = { getAllDepartments, getAllRoles };