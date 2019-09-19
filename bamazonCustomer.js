//dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");

//defining the MySQL connection variable
const connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

//connecting to MySQL
connection.connect(function (err) {
    if (err) throw err;
    console.log("Welcome to Bamazon! Here's what's in stock today!" + "\n");
    afterConnection();
});

//displays items for sale, then calls buyStuff function
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
    ]).then(function (answers) {
        const itemID = parseInt(answers.itemID);
        const quantity = parseInt(answers.quantity);

        connection.query("SELECT item_id, product_name, price, stock_quantity FROM products WHERE item_id=?", itemID, function (err, res) {
            if (err) throw err;

            const quantityLeft = res[0].stock_quantity - quantity;
            const orderTotal = res[0].price * quantity;

            //checking if there's enough quantity in stock
            if (quantityLeft < 0) {
                console.log("Insufficient quantity for this item!");
                process.exit();
            }

            //updating the database with remaining quantity
            connection.query("UPDATE products SET stock_quantity=? WHERE item_id=?", [quantityLeft, itemID], function (err) {
                if (err) throw err;

                console.log("Order fulfilled! Your cost is $" + orderTotal);
                process.exit();
            });
        });
    }).catch(function (error) {
        console.log(error);
        process.exit();
    });
}
