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
    connection.query("SELECT item_id, product_name, price, stock_quantity FROM products", function (err, res) {
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
    ]).then(function (answers) {
        const itemID = parseInt(answers.itemID);
        const quantity = parseInt(answers.quantity);

        connection.query("SELECT item_id, product_name, price, stock_quantity FROM products WHERE item_id=?", itemID, function (err, res) {
            if (err) throw err;

            const quantityLeft = res[0].stock_quantity - quantity;
            const orderTotal = res[0].price * quantity;

            if (quantityLeft < 0) {
                console.log("Insufficient quantity for this item!");
                process.exit();
            }

            connection.query("UPDATE products SET stock_quantity=? WHERE item_id=?", [quantityLeft, itemID], function (err) {
                if (err) throw err;

                console.log("Order fulfilled! Your cost was $" + orderTotal);
                process.exit();
            });
        });
    }).catch(function (error) {
        console.log(error);
        process.exit();
    });
}
