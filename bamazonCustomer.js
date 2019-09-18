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
        buyStuff();
    });
}

function buyStuff() {
    inquirer.prompt([
        {
            name: "itemID",
            type: "input",
            message: "Please enter the item_id of the item you would like to buy"
        },

        {
            name: "quantity",
            type: "input",
            message: "How many would you like to buy?"
        }
    ]).then

}





// 7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request. If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

// 8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
//    * This means updating the SQL database to reflect the remaining quantity.
//    * Once the update goes through, show the customer the total cost of their purchase.