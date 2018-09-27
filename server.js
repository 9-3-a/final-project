// module imports
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');




// load keys
const keys = require('./config/keys/keys');


// map global promises 
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));



// PRODUCTION ONLY
 app.use(express.static(path.join(__dirname, 'client/build')));

// app middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

const wineRoutes = require('./routes/wines');

app.use('/wines',  wineRoutes);

//mongoose.connect('mongodb://haloos2:apple112@ds155292.mlab.com:559/2dio')
// PRODUCTION ONLY
 app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
 });

// Development mode port
const port = process.env.PORT || 5000;
app.listen(port,()=> {
  console.log('server');
});

module.exports = app;
