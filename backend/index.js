const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');
const cors = require('cors');


const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/meanapp', { useNewUrlParser: true, useUnifiedTopology: true });

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// Use API routes
app.use('/api', apiRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
