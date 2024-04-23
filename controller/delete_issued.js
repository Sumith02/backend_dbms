const db = require('../db/db');

module.exports = (req, res, next) => {
    const s_no = req.params.bookNo;
    const sql = 'DELETE FROM issued_books WHERE s_no = ?';

    db.query(sql, [s_no], (error, result) => {
        if (error) {
            console.error('Error deleting book:', error);
            res.status(500).send('Failed to delete book');
        } else {
            console.log('Book deleted successfully');
            res.sendStatus(200); // Send success response
        }
    });
};