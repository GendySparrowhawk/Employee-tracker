USE employees;

INSERT INTO department (title) VALUES
('floor'),
('receiving'),
('coursebooks'),
('office'),
('warehouse');

INSERT INTO part (title, salary, department_id) VALUES
('cashier', 25000, 1),
('restock', 25000, 1),
('customer_help', 25000, 1),
('quality_control', 25000, 2),
('returns', 30000, 2),
('unboxing', 25000, 2),
('orders', 32000, 3),
('admin', 32000, 3),
('student_services'. 32000, 3),
('orders_office', 32000, 4),
('payroll', 80000, 4),
('accounts_payable', 32000, 4),
('trucking', 60000, 5),
('receiving_warehoue', 32000, 5),
('remainders', 32000, 5);


INSERT INTO employee (first_name, last_name, part_id, manager_id) VALUES
('Cathy', 'Smergal', 1, NULL),
('Mardok', 'kishpa', 1, 1),
('Pandora', 'Villalobos', 1, 1),
('Arch', 'Dupree', 2, 5),
('Dante', 'Devonshire', 2, NULL),
('Zaine', 'Graves', 2, 5),
('Rain', 'Carpathia', 2, 5),
('Klyn', 'Onyx', 3, 9),
('Xlyan', 'Shadowmen', 3, NULL),
('Kat', 'Eldritch', 3, 9),10
('Zul', 'Eldritch', 4, NULL),
('Zofia', 'Cloven', 4, 12),
('Marcia', 'Riddle', 4, 12),
('Kaige', 'Mallor', 5, NULL),
('Vexicon', 'Bloodworth', 5, 15),
('Nash', 'Ash', 6, NULL),
('Norrix', 'Tempest', 6, 16),
('Laguna', 'Hunt', 6, 16),
('Eion', 'Blackridge', 7, NULL),
('Brink', 'Diablo', 7, 19),20
('Sable', 'Rathmore', 7, 19),
('Xensor', 'Madness', 8, NULL),
('Jett', 'Tempest', 8, 22),
('Hades', 'Crane', 8, 22),
('Fane', 'Victor', 9, NULL),
('Lauden', 'Church', 9, 25),
('Gnash', 'Chalice', 9, 25),
('Kellem', 'Von Steim', 10, NULL)
('Rothbers', 'Von Steim', 10, 28),
('Karl', 'Von Steim', 10, 28),
('Emmit', 'Kobe', 11, NULL),
('Morrow', 'Argent', 11, 31),
('Isahia', 'Vigil', 11, 31),
('Vexx', 'Nox', 12, NULL),
('Vaxx', 'Nox', 12, 34),
('Voss', 'Wolfmoon', 12, 34),
('Mitrick', 'Crane', 13, NULL),
('Marth', 'Grove', 13, 37),
('Zadimus', 'Whisper', 13, 37),
('Vin', 'Disel', 14, NULL),
('Eldor', 'Riftmaker', 14, 40),
('Derik', 'Meatmiser', 14, 40),
('Philis', 'Deathstalker', 15, NULL),
('Crom', 'Totenmouse', 15, 43),
('Jd', 'Tadlock', 15, 43);

