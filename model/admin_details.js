const db = require("../db/db");
module.exports = (req, res, next) => {
    const adminSchemaQuery = `
        CREATE TABLE admins(
            adminid INT  PRIMARY KEY,
            admin_name VARCHAR(20),
            user_name VARCHAR(20),
            password VARCHAR(20)
        );
    `;
    db.query(adminSchemaQuery, (error, result) => {
        if (error) {
            res.status(500).json({
                status: false,
                message: error.message
            });
        }
        res.status(200).json({ status: true, message: "Query Execuited Successfully" });
    });
};