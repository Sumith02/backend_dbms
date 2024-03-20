const db = require('../db/db');
module.exports = (req, res, next) => {
    const { fname, lname, email, password, phone } = req.body;
    const userQuery = `INSERT INTO users(first_name,last_name,email_id,password,phone) VALUES(?,?,?,?,?) `;
    db.query(userQuery, [fname, lname, email, password, phone], (error, result) => {
        if (error) {
            res.status(500).json({ status: false, message: error.message });
        }
        res.status(200).json({ status: true, message: "user Created Successfully" });
    });
};