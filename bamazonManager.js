var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "bamazon_db"
  });

  function connectToDb(){
    connection.connect(function(err) {
        if (err) throw err; 
    });
    managerChoice();
  }

  function managerChoice(){
   
      inquirer.prompt([
        {
        type: 'list',
        message: 'Manager menu options: ',
        name: 'name',
        choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product", "Exit"]
        }
      ]).then(function(res){
        
          if (res.name === "View Products for Sale"){
            viewProducts();
          }else if (res.name === "View Low Inventory"){
            viewLowInventory();
          }else if (res.name === "Add to Inventory"){
            addToInventory();
          }else if (res.name === "Add New Product"){
            addNewProduct();
          }else{
            connection.end();
          }
     
    });
    };
  
  
function viewProducts(){

    var query = "SELECT * FROM products";
    connection.query(query, function(err, res) {
        
        var table = new Table({
            head: ['#', 'Department', 'Product name', 'Price', 'Quantity'], 
            colWidths: [5, 25, 35, 20, 20]
        });
        for (var i = 0; i < res.length; i++) {
        table.push([res[i].item_id, res[i].department_name, res[i].product_name, res[i].price, res[i].stock_quantity]);
        }
        console.log(table.toString());
        managerChoice();
        });
    
};

function viewLowInventory(){
   
    var query = "SELECT * FROM products WHERE stock_quantity <= 5";
    connection.query(query,  function(err, res) {
        
        var table = new Table({
            head: ['#', 'Department', 'Product name', 'Price', 'Quantity'], 
            colWidths: [5, 25, 35, 20, 20]
        });
        for (var i = 0; i < res.length; i++) {
        table.push([res[i].item_id, res[i].department_name, res[i].product_name, res[i].price, res[i].stock_quantity]);
        }
        console.log(table.toString());
        managerChoice();
        });
      
}

function addToInventory(){
    inquirer.prompt([
        {
            name: 'itemId',
            type: 'input',
            message: 'Enter the id of the product: ',
            validate: function (value) {
                if (isNaN(value) === false && parseInt(value) > 0 ) {
                  return true;
                }
                return false;
              }
        },
        {
            name: 'itemCount',
            type: 'input',
            message: 'How many item do you want to add: ',
            validate: function (value) {
                if (isNaN(value) === false && parseInt(value) > 0 ) {
                  return true;
                }
                return false;
              }
        }
    ]).then(function(answer){
        connection.query("SELECT * FROM products WHERE ?", {item_id: answer.itemId}, function(err, res){
            var stockQuantity = res[0].stock_quantity;
            var productName = res[0].product_name;
            var price = res[0].price;
            var balance =  parseInt(stockQuantity) + parseInt(answer.itemCount);
     
            connection.query("UPDATE products SET stock_quantity = ? WHERE ?", [balance, {item_id: answer.itemId}], function(err, res) {
            
            managerChoice();
            })
           
          })
    })
}

function addNewProduct(){
    inquirer.prompt([
        {
            type: 'input',
            message: 'Product name: ',
            name: 'productName',
        },
        {
            type: 'input',
            message: 'Department: ',
            name: 'department',
        },
        {
            type: 'input',
            message: 'Cost price: ',
            name: 'costPrice',
            validate: function (value) {
                if (isNaN(value) === false && parseInt(value) > 0 ) {
                  return true;
                }
                return false;
              }
        },
        {
            type: 'input',
            message: 'Price: ',
            name: 'price',
            validate: function (value) {
                if (isNaN(value) === false && parseInt(value) > 0 ) {
                  return true;
                }
                return false;
              }
        },
        {
            type: 'input',
            message: 'Quantity: ',
            name: 'quantity',
            validate: function (value) {
                if (isNaN(value) === false && parseInt(value) > 0 ) {
                  return true;
                }
                return false;
              }
        }
    ]).then(function(answer){
       
        connection.query("INSERT INTO products SET ?",
        {
          product_name: answer.productName,
          department_name: answer.department,
          cost_price: answer.costPrice,
          price: answer.price,
          stock_quantity: answer.quantity
        }, function(err, res){
            managerChoice();
          })
    })
}

connectToDb();