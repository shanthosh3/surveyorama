const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

//DB
const db = require('./config/database');

//TEST DATABASE

db.authenticate()
    .then(() => console,log('Database connected...'))
    .catch(err => console.log('Error: ' + err))

const app = express();

app.get('/', (req, res) => res.send('INDEX'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`server started on port ${PORT}`));