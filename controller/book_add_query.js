const db = require('../db/db');
module.exports = (req, res, next) => {
    const { id, name, author, category, price } = req.body;
    const bookQuery = `
        INSERT INTO books(book_id,book_name,author_id,cat_id,book_price) VALUES(?,?,?,?,?)
    `;
    db.query(bookQuery, [id, name, author, category, price], (error, result) => {
        if (error) {
            res.status(500).json({ status: false, message: error.message });

        }
        res.status(200).json({ status: true, message: "user Created Successfully" });
    });
};