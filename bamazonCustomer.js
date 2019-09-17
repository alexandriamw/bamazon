const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Welcome to Bamazon! Here's what's in stock today!" + "\n");
    afterConnection();
});

function afterConnection() {
    connection.query("SELECT item_id, product_name, price FROM products", function (err, res) {
        if (err) throw err;
        console.table(res);
    });
}

function buyStuff() {
    inquirer
        .prompt({

        })
        .then
}