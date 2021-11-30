const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

// importing the routes 
import usersRoutes from './controllers/api/userroutes';


//DB
const sequelize = require('./config/database');

//TEST DATABASE

// db.authenticate()
//     .then(() => console.log('Database connected...'))
//     .catch(err => console.log('Error: ' + err))

const app = express();



app.get('/', (req, res) => res.send('INDEX'));

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: true}).then(()=> {
    console.log("Synced and reset DB w SEQUElize")
app.listen(PORT, ()=>{
   console.log(`App listening on port ${PORT}`)
})
})

app.use('/users', usersRoutes);