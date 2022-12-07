const mysql = require('mysql2');

const connection  =mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "abc456",
  database: "classicmodels"
})

connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });
  
  module.exports = connection;