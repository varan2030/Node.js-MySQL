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
VALUES ("Kindle", "Electronics", 72,  89, 532, 0);

INSERT INTO products (product_name, department_name, cost_price, price, stock_quantity, sold_items)
VALUES ("Hammer", "Tools and Home Improvement", 15,  24, 165, 0);

INSERT INTO products (product_name, department_name, cost_price, price, stock_quantity, sold_items)
VALUES ("Node.js Book", "Books", 35, 47, 160, 0);

INSERT INTO products (product_name, department_name, cost_price, price, stock_quantity, sold_items)
VALUES ("MySQL Book", "Books", 19,  29, 870, 0);

INSERT INTO products (product_name, department_name, cost_price, price, stock_quantity, sold_items)
VALUES ("Gitarras", "Musical Instruments", 250, 320, 5, 0);

INSERT INTO products (product_name, department_name, cost_price, price, stock_quantity, sold_items)
VALUES ("Mac Note", "Electronics", 1500, 2500, 59, 0);

INSERT INTO products (product_name, department_name, cost_price, price, stock_quantity, sold_items)
VALUES ("Piano", "Musical Instruments", 7999, 9999, 3, 0);

INSERT INTO products (product_name, department_name, cost_price, price, stock_quantity, sold_items)
VALUES ("Pliers", "Tools and Home Improvement", 7,  13, 333, 0);

INSERT INTO products (product_name, department_name, cost_price, price, stock_quantity, sold_items)
VALUES ("Temir Komuz", "Musical Instruments", 70, 130, 4, 0);

INSERT INTO products (product_name, department_name, cost_price, price, stock_quantity, sold_items)
VALUES ("Doll", "Toys and Games", 4,  9, 1000, 0);

INSERT INTO products (product_name, department_name, cost_price, price, stock_quantity, sold_items)
VALUES ("Specialized Bike", "Sport and Outdoor", 6500, 7780, 10, 0);

INSERT INTO products (product_name, department_name, cost_price, price, stock_quantity, sold_items)
VALUES ("Tent", "Sport and Outdoor", 350, 500, 20, 0);

INSERT INTO products (product_name, department_name, cost_price, price, stock_quantity, sold_items)
VALUES ("Black Panther", "Toys and Games", 40,  65, 36, 0);

INSERT INTO products (product_name, department_name, cost_price, price, stock_quantity, sold_items)
VALUES ("JQuery for begginers", "Books", 29,  39, 70, 0);
