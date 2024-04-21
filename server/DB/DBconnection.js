
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});


// Export the Mongoose connection
module.exports = mongoose.connection;

