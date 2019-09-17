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
    buyStuff();
  });

function buyStuff() {
    inquirer
        .prompt({

        })
        .then
}