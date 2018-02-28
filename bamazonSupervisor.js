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
    var query = "SELECT COUNT (sold_items), department_name FROM products GROUP BY department_name";
    connection.query(query, function(err, res) {
        console.log(res);
        var table = new Table({
            head: ['#', 'Department', 'Sold Items'], 
            colWidths: [5, 25, 35]
        });
        for (var i = 0; i < res.length; i++) {
        table.push([res[i].department_id, res[i].department_name, res[i].sold_items]);
        }
        console.log(table.toString());
        managerChoice();
        });
  };
  connectToDb();