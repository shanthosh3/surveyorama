const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

// importing the routes 
const usersRoutes = require('./controllers/api/userroutes');


//DB
const sequelize = require('./config/database');

//TEST DATABASE

// db.authenticate()
//     .then(() => console.log('Database connected...'))
//     .catch(err => console.log('Error: ' + err))

const app = express();
app.use('/users', usersRoutes);


const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.send('INDEX'));

sequelize.sync({ force: false}).then(()=> {
    console.log("Synced and reset DB w SEQUElize")
app.listen(PORT, ()=>{
   console.log(`App listening on port ${PORT}`)
})
})

