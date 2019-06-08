const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API Running'));
//single endpoint just to test out, res.send: sends data to browser

const PORT = process.env.PORT || 5000;
//looks for a variable envirement called PORT for config with heroku or 5000 port for local

app.listen(PORT, () => console.log(`sever started on port ${PORT}`));
