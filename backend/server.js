const express = require('express');
const connectDB = require('./config/db');
const app = express();
app.use(express.json());
connectDB();
app.use('/api', require('./routes/api'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
