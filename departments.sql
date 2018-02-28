DROP DATABASE IF EXISTS departments_db;

USE bamazon_db;

CREATE TABLE departments (
    department_id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR (45) NULL,
    over_head_costs DECIMAL (20,2) NULL,
    product_sales DECIMAL (20,2) NULL,
    total_profit DECIMAL (20,2) NULL,
    PRIMARY KEY (department_id)
);