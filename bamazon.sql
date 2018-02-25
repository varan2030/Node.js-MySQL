DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR (45) NULL,
  department_name VARCHAR (45) NULL,
  price DECIMAL (10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("balexa", "Electronics", 59.95, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bindle", "Electronics", 89.95, 532);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nodejs Book", "Books", 47.95, 160);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("MySQL", "Books", 29.95, 870);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The most expensive diamond", "Jewelry", 99000000.95, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mac Note", "Computers", 2500, 59);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cool stuff", "Luxury Beaty", 1559.95, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Not so cool stuff", "Luxury Beaty", 0.95, 540);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Best doll", "Baby", 9.95, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Specialized", "Bike", 7780, 10);