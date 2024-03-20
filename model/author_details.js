const db = require("../db/db");
module.exports = (req, res, next) => {
    const issuedBookQuery = `
        CREATE TABLE author_details(
            author_id int(11) AUTO_INCREMENT PRIMARY KEY,
            author_name varchar(200) NOT NULL
        );
    `;
    db.query(issuedBookQuery, (error, result) => {
        if (error) {
            res.status(500).json({

                status: false,
                message: error.message
            });
        }
        res.status(200).json({ status: true, message: "Query Execuited Successfully" });
    });
};