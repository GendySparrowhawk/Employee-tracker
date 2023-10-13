const mysql = require('mysql2/promise');


const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'pass',
    database: 'employees_db',
  });
  

  module.exports = connection