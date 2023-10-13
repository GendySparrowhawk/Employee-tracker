DROP DATABASE IF EXISTS employees;

CREATE DATABASE employees;

USE employees;

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
        manager_id INT,
        FOREIGN KEY (part_id) REFERENCES part(id) ON DELETE CASCADE,
        FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
    );