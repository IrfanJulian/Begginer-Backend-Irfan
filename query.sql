CREATE TABLE category(
    id INT PRIMARY KEY NOT NULL GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(64) NOT NULL
);

INSERT INTO category(name)VALUES('t-shirt');

SELECT products.*, category.name AS name FROM products INNER JOIN category ON products.id_category = category.id;

CREATE TABLE transactions(
    id INT PRIMARY KEY NOT NULL GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(64) NOT NULL,
    total_order INT DEFAULT 0,
    price INT DEFAULT 0,
    total_price INT DEFAULT 0
);

INSERT INTO transactions(name, total_order, price, total_price)VALUES('hoodie', 1, 250000, 250000)

-- DATABASE BARU

CREATE TABLE products(id SERIAL PRIMARY KEY, name VARCHAR(64) NOT NULL, brand VARCHAR(64), condition VARCHAR(64), description VARCHAR(256), stock INT DEFAULT 0, id_category INT NOT NULL);
ALTER TABLE products ADD price INT DEFAULT 0;

CREATE TABLE category(id SERIAL PRIMARY KEY, name VARCHAR(64) NOT NULL);

CREATE TABLE transactions(id SERIAL PRIMARY KEY, id_product INT NOT NULL, id_user INT NOT NULL, amount INT DEFAULT 0, price INT DEFAULT 0, total INT DEFAULT 0)

CREATE TABLE users(id SERIAL, FullName VARCHAR (64), email VARCHAR (64) NOT NULL, role VARCHAR (16), password VARCHAR (64) NOT NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, update_at TIMESTAMP, PRIMARY KEY (id));

INSERT INTO users(FullName, email, role, password)VALUES('Irfan Julian', 'ivan.lookkas@gmail.com', 'admin', 'asdqwe');

INSERT INTO transactions(id_product, id_user, amount, price, total)VALUES(1, 1, 1, 0, 0);

SELECT products.*, category.name AS category FROM products INNER JOIN category ON products.id_category = category.id;

SELECT transactions.*, products.name AS name_product