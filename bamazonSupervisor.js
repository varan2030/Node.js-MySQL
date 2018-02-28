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
    supervisorReview();
  };

  function supervisorReview(){
    var query = "SELECT COUNT(*) AS number_of_products, department_name, SUM(cost_price * sold_items) AS cost, SUM (price * sold_items) AS sale, SUM((price-cost_price)*sold_items) AS profit FROM products GROUP BY department_name";
    
    connection.query(query, function(err, res) {
        console.log(res);
        var table = new Table({
            head: ['Number of product', 'Department', 'Over head costs', "Product sales", "Profit"], 
            colWidths: [20, 35, 25, 25, 25]
        });
        for (var i = 0; i < res.length; i++) {
        table.push([res[i].number_of_products, res[i].department_name, res[i].cost, res[i].sale, res[i].profit]);
        }
        console.log(table.toString());
        });
  };
  connectToDb();