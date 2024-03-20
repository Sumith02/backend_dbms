const db = require('../db/db');
module.exports = (req, res, next) => {
    const { user_id } = req.query;
    const query = 'SELECT * FROM issued_books WHERE user_id = ?';

    db.query(query, [user_id], (error, [result]) => {
        if (error) {
            console.error('Error fetching data from database:', error);
            res.status(500).send({ error: 'Failed to fetch data' });
        }

        res.json(result);
        //console.log(result);
        //res.status(200).json({ s_no: result.s_no, book_name: result.book_name, author_id: result.author_id, user_id: result.user_id, issue_date: result.issue_date, return_date: result.return_date })
    });


};