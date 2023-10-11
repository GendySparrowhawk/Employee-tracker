USE employees;

INSERT INTO department (title) VALUES
('editorial'),1
('graphics'),2
('sports'),3
('international'),4
('weather'),5
('local'),6
('entertainment'),7
('obituaries'),8
('opinion');9

INSERT INTO part (title, salary, department_id) VALUES
('Editor', 60000, 1),*1
('Intern', 00000, 1),*2
('Copyeditor', 45000, 1),3
('Designer', 70000, 2),4
('Layout', 55000, 2),5
('Journalist', 70000, 3),6
('')

INSERT INTO employee (first_name, last_name, part_id, manager_id) VALUES
('Cathy', 'Smergal', 2, NULL),
('')

