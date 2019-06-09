const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect database

connectDB();

//init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));
//single endpoint just to test out, res.send: sends data to browser

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;
//looks for a variable envirement called PORT for config with heroku or 5000 port for local

app.listen(PORT, () => console.log(`sever started on port ${PORT}`));
