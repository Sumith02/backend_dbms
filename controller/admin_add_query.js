const db = require('../db/db');
module.exports = (req, res, next) => {
    const { name, password } = req.body;
    const adminQuery = `
        INSERT INTO admins(admin_name,password) VALUES(?,?);
    `;
    db.query(adminQuery, [name, password], (error, result) => {
        if (error) {
            res.status(500).json({ status: false, message: error.message });
        }
        res.status(200).json({ status: true, message: "Admin Created Successfully" });
    });
};