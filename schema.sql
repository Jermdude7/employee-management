DROP DATABASE IF EXISTS employees_db;
CREATE database employees_db;
​
USE employees_db;

CREATE TABLE department (
-- id - INT PRIMARY KEY
id INT PRIMARY KEY,
-- name - VARCHAR(30) to hold department name
name VARCHAR(30) NULL,
 
);

-- role:​
CREATE TABLE roles (
-- id - INT PRIMARY KEY
  id INT PRIMARY KEY,
-- title - VARCHAR(30) to hold role title
  title VARCHAR(30) NULL,
-- salary - DECIMAL to hold role salary
  salary DECIMAL(10000.00) NULL,
-- department_id - INT to hold reference to department role belongs to
  department_id INT,
);
​
-- employee:

CREATE TABLE employee (
-- id - INT PRIMARY KEY
  id INT PRIMARY KEY,
-- first_name - VARCHAR(30) to hold employee first name
  first_name VARCHAR(30) NULL,
-- last_name - VARCHAR(30) to hold employee last name
  last_name VARCHAR(30) NULL,
-- role_id - INT to hold reference to role employee has
  role_id INT ,
-- manager_id - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager
manager_id INT,
);
SELECT * FROM department ;
select * from roles;
select * from employee;