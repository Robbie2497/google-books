const express = require('express');
const mongoose = require('mongoose');
const path = require('path');


const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
  app.use(express.static('../client/public'));

// initialize routes
app.use('/api', require('./routes/api'));


mongoose.connect('mongodb://localhost/favorites',
{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }
);

mongoose.connection.once('open', function () {
console.log('Connection to database has been made...');
}).on('error', function (error) {
console.log('Connection Error' + error);
});

// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});