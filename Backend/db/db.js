const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT)
        .then(() => console.log('Connected to the database successfully'))
        .catch(err => {
            console.error('Error connecting to the database:', err.message);
            process.exit(1); // Exit the process if connection fails
        });
}

module.exports = connectToDb;
