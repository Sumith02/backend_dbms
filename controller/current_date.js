const db = require('../db/db');

module.exports = async(req, res, next) => {
    try {
        // Define a function to get the current date
        const getCurrentDate = async() => {
            const currentDate = new Date();
            const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;

            res.json({ formattedDate });
            return formattedDate;
        };

        // Define a function to update data in the database
        const updateDatabase = async() => {
            await db.execute(`   
                UPDATE issued_books 
                SET return_date = DATE_ADD(issue_date, INTERVAL 15 DAY)
            `);
        };

        // Execute both operations concurrently
        const [currentDate, _] = await Promise.all([getCurrentDate(), updateDatabase()]);

        // Send the current date as a JSON response
        //res.json({ currentDate });

    } catch (error) {
        console.error('Error handling request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};