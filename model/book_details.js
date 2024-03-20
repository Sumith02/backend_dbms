const db = require("../db/db");
module.exports = (req, res, next) => {
    const bookSchemaQuery = `
    CREATE TABLE books(
        book_id VARCHAR(20) PRIMARY KEY,
        book_name VARCHAR(20),
        author_id VARCHAR(20),
        category_id VARCHAR(20),
        book_price INTEGER       
    );
    `;
    db.query(bookSchemaQuery, (error, result) => {
        if (error) {
            res.status(500).json({ status: false, message: error.message });
        }
        res.status(200).json({ status: true, message: "Query Execuited Successfully" });
    });
}