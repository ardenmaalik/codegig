const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  
  client.connect();
const express = require('express');//web framework
const exphbs = require('express-handlebars');//display html and dynamic content
const bodyParser = require('body-parser');//get data from form
const path = require('path');

//Database
const db = require('./config/database');

//Test DB
db.authenticate()
.then(() => console.log ('Database connected...'))
.catch(err => console.log('Error:' + err))

const app = express();//initialize express

app.engine('handlebars', exphbs ({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Body Parser

app.use(bodyParser.urlencoded({extended: 'false'}));

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Index route
app.get('/', (req, res) => res.render('index', { layout: 'landing'}))

app.get('/', (req, res) => res.send('INDEX'));

//Gig routes

app.use('/gigs', require('./routes/gigs'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server listening on port ${PORT}`)); //listens to server
