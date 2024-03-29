const mysql = require("mysql2");
require("dotenv").config();
const connection = mysql.createConnection({
    host: process.env.db_host,
    user: process.env.db_user,
    database: process.env.db_name
});

connection.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    console.log("connected successfully");
});

module.exports = connection;