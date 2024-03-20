const db = require("../db/db");

module.exports = (req, res, next) => {
    const { user_id } = req.query;

    const query = 'SELECT * FROM users WHERE userid = ?';

    db.query(query, [user_id], (error, [result]) => {
        if (error) {
            console.error('Error executing query:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ first_name: result.first_name, last_name: result.last_name, email_id: result.email_id, phone: result.phone })
    })


}