const db = require('../db/db');

module.exports = (req, res, next) => {
    const { user_id } = req.query;
    const query = 'SELECT COUNT(*) AS count FROM users';

    db.query(query, [user_id], (error, result) => {
        if (error) {
            console.error('Error fetching data from database:', error);
            return res.status(500).send({ error: 'Failed to fetch data' });
        }

        const rowCount = result[0].count; // Extract the count from the result

        res.json({ rowCount });
    });
};