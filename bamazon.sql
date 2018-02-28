DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR (45) NULL,
  department_name VARCHAR (45) NULL,
  cost_price DECIMAL (10,2) NULL,
  price DECIMAL (10,2) NULL,
  stock_quantity INT NULL,
  sold_items INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, cost_price, price, stock_quantity, sold_items)
VALUES ("Balexa", "Electronics", 45,  59, 100, 0);

INSERT INTO products (product_name, department_name, cost_price, price, stock_quantity, sold_items)
VALUES ("Bindle", "Electronics", 72,  89, 532, 0);

INSERT INTO products (product_name, department_name, cost_price, price, stock_quantity, sold_items)
VALUES ("Nodejs Book", "Books", 35, 47, 160, 0);

INSERT INTO products (product_name, department_name, cost_price, price, stock_quantity, sold_items)
VALUES ("MySQL Book", "Books", 19,  29, 870, 0);

INSERT INTO products (product_name, department_name, cost_price, price, stock_quantity, sold_items)
VALUES ("Diamond", "Jewelry", 790000, 990000, 1, 0);

INSERT INTO products (product_name, department_name, cost_price, price, stock_quantity, sold_items)
VALUES ("Mac Note", "Computers", 1500, 2500, 59, 0);

INSERT INTO products (product_name, department_name, cost_price, price, stock_quantity, sold_items)
VALUES ("Cool stuff", "Luxury Beaty", 999, 1559, 20, 0);

INSERT INTO products (product_name, department_name, cost_price, price, stock_quantity, sold_items)
VALUES ("Not so cool stuff", "Luxury Beaty", 1, 2, 540, 0);

INSERT INTO products (product_name, department_name, cost_price, price, stock_quantity, sold_items)
VALUES ("Best doll", "Baby", 4,  9, 1000, 0);

INSERT INTO products (product_name, department_name, cost_price, price, stock_quantity, sold_items)
VALUES ("Specialized", "Bike", 6500, 7780, 10, 0);