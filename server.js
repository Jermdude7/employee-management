var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "employees_db",
});

connection.connect(function (err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
          
          
          // Update employee roles
          // Add departments, roles, employees
          "Add Department?",
          "Add Employees?",
          "Add roles?",
          "remove department?",
          "remove employee?",
          "remove roles?",
          // View departments, roles, employees
          "view all?",
        "exit",
      ],
    })
    .then(function (answer) {
      switch (answer.action) {
        case "Add Department":
          departmentSearch();
          break;

        case "Find all artists who appear more than once":
          multiSearch();
          break;

        case "Find data within a specific range":
          rangeSearch();
          break;

        case "Search for a specific song":
          songSearch();
          break;

        case "exit":
          connection.end();
          break;
      }
    });
}

function departmentSearch() {
  inquirer
    .prompt({
      name: "department",
      type: "input",
      message: "What department would you like to search for?",
    })
    .then(function (answer) {
      var query = "SELECT department FROM department WHERE ?";
      connection.query(query, { department: answer.department }, function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
          console.log(
            "sucess"
          );
        }
        runSearch();
      });
    });
}

function multiSearch() {
  var query = "SELECT artist FROM top5000 GROUP BY artist HAVING count(*) > 1";
  connection.query(query, function (err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].artist);
    }
    runSearch();
  });
}
