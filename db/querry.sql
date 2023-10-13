-- used for view all departments
USE employees;

SELECT * FROM department;


-- view all parts
USE employees;

SELECT * FROM part;


-- view all employees
USE employees;

SELECT * FROM employee;


--get employees by department
USE employees;
SELECT
e.first_name,
e.last_name,
p.title AS part_title,
d.name AS department
FROM employee e
    JOIN part p
    ON e.part_id = p.id
    JOIN department d
    ON p.department_id = d.id
    WHERE p.id = 1;
