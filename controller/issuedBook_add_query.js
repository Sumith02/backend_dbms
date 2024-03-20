const db = require('../db/db');
module.exports = (req, res, next) => {
    const { bno, bname, bauthor, sid, idate } = req.body;
    const issueQuery = `
        INSERT INTO issued_books(s_no,  book_name,author_id,user_id,issue_date) VALUES(?,?,?,?,?)
    `;
    db.query(issueQuery, [bno, bname, bauthor, sid, idate], (error, result) => {
        if (error) {
            res.status(500).json({ status: false, message: error.message });
            console.log(error);
        }
        res.status(200).json({ status: true, message: "user Created Successfully" });
    });

};