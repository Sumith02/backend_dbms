const db = require('../db/db');
module.exports = (req, res, next) => {
    const userDetailsSchema = `
        CREATE TABLE users(
            userid INT  AUTO_INCREMENT,
            first_name VARCHAR(30),
            last_name VARCHAR(30),
            email_id VARCHAR(30),
            password VARCHAR(30),
            phone VARCHAR(10),
            PRIMARY KEY(userid , email_id)
        );
    `;
    db.query(userDetailsSchema, (error, result) => {
        if (error) {
            res.status(500).json({ status: false, message: error.message });
        }
        res.status(200).json({ status: true, message: "Query Execuited Successfully" });
    });
}