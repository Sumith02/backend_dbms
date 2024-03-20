const db = require("../db/db");
module.exports = (req, res, next) => {
    const issuedBookQuery = `
        CREATE TABLE issued_books(
            s_no int(11) AUTO_INCREMENT PRIMARY KEY,
            book_no int(11) NOT NULL,
            book_name varchar(200) NOT NULL,
            book_author varchar(200) NOT NULL,
            student_id int(11) NOT NULL,
            status int(11),
            issue_date longtext NOT NULL
            
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