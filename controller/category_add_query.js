const db = require('../db/db');
module.exports = (req, res, next) => {
    const { cname } = req.body;
    const issueQuery = `
        INSERT INTO category_details(cat_name) VALUES(?)
    `;
    db.query(issueQuery, [cname], (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).json({ status: false, message: error.message });

        }
        res.status(200).json({ status: true, message: "user Created Successfully" });
    });

};