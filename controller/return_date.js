const connection = require('../db/db');

module.exports = async(req, res, next) => {
    try {
        const currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;

        // Update data in the database
        await updateData();

        // Send the formatted date as a JSON response
        res.json({ formattedDate });
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

async function updateData() {
    return new Promise((resolve, reject) => {
        connection.query(`
            UPDATE issued_books 
            SET return_date = DATE_ADD(issue_date, INTERVAL 15 DAY)
        `, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }

        });



    });
}