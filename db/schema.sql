DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE
    department (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(30)
    );


CREATE TABLE
    part (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(30),
        salary DECIMAL,
        department_id INT NOT NULL,
        FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
    );


CREATE TABLE
    employee(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(30),
        last_name VARCHAR(30),
        part_id INT NOT NULL,
        FOREIGN KEY (part_id) REFERENCES part(id) ON DELETE CASCADE,
        manager_id INT,
        FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
    );