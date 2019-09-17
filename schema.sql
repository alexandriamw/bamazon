DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100),
  department_name VARCHAR(100),
  price INTEGER(100),
  stock_quantity INTEGER(100),
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("blue jeans", "pants", 25, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("khakis", "pants", 35, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("black hoodie", "tops", 32, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("t-shirt", "tops", 10, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("white socks", "socks", 3, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("black socks", "socks", 3, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("fleece pajamas", "pajamas", 18, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cotton pajamas", "pajamas", 15, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("leather boots", "shoes", 50, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("running shoes", "shoes", 45, 5);

