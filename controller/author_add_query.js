const db = require('../db/db');
module.exports = (req, res, next) => {
    const { aid, aname } = req.body;
    const issueQuery = `
        INSERT INTO author_details(author_id,author_name) VALUES(?,?)
    `;
    db.query(issueQuery, [aid, aname], (error, result) => {
        if (error) {
            res.status(500).json({ status: false, message: error.message });

        }
        res.status(200).json({ status: true, message: "user Created Successfully" });
    });

};