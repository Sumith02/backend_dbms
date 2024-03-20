const db = require('../db/db');
module.exports = (req, res, next) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM users WHERE email_id = ?';
    db.query(query, [email], (err, [result]) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        if (result.length === 0) {
            return res.status(401).json({ message: 'User not found' });
        }

        const user = result;
        if (user.password !== password) {
            return res.status(401).json({ message: 'Wrong password' });
        }

        res.status(200).json({ userid: result.userid });
    });

};