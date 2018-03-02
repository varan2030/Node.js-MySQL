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

//Display id, number, name of products from darabase

function showProducts(){
connection.connect(function(err) {
    if (err) throw err;
    var query = "SELECT * FROM products";
    connection.query(query, function(err, res) {
      
        var table = new Table({
            head: ['#', 'Department', 'Product name', 'Price']
          , colWidths: [10, 35, 35, 35]
        });
      for (var i = 0; i < res.length; i++) {
        table.push([res[i].item_id, res[i].department_name, res[i].product_name, res[i].price]);
      }
      console.log(table.toString());
      cutomerChoice();
    });
  })
};

// Customer choise number of products by id 
  function cutomerChoice(){
    inquirer.prompt([
      {
        name: "productId",
        message: "Please enter product ID",
        validate: function (value) {
          if (isNaN(value) === false && parseInt(value) > 0 ) {
            return true;
          }
          return false;
        }
      },
      
      {
        name: "numberOfProduct",
        message: "How many units of the product would you like to buy?",
        validate: function (value) {
          if (isNaN(value) === false && parseInt(value) > 0 ) {
            return true;
          }
          return false;
        }
      }
    ]).then(function(answer){
      var id = answer.productId;
      var number = answer.numberOfProduct;
      checkForAvailability(id, number);
    })
  }

  function checkForAvailability(id, number){
    connection.query("SELECT * FROM products WHERE ?", {item_id: id}, function(err, res){
      var stockQuantity = res[0].stock_quantity;
      var productName = res[0].product_name;
      var price = res[0].price;
      var balance =  stockQuantity - number;
      var soldItems = res[0].sold_items + parseInt(number);
      if (balance < 0){
        console.log("Insufficient quantity! " +  res[0].product_name + " left only " + res[0].stock_quantity);
        proceedPurchase();
      }else{
        connection.query("UPDATE products SET stock_quantity = ?, sold_items = ? WHERE ?", [balance, soldItems, {item_id: id}], function(err, res) {
          console.log("You total amount is " + number*price);
          proceedPurchase();
        })
      }
    })
  }

function proceedPurchase(){
  inquirer.prompt([
    {
      type: "confirm",
      name: "name",
      message: "Do you want to proceed with your purshase?"
    }
  ]).then(function(answer){
    if(answer.name){
      cutomerChoice();
    }else{
      connection.end();
    }
  })
}

  showProducts();