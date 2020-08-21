const express = require('express');
const mongoose = require('mongoose');
const path = require('path');


const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('client/build'));

// initialize routes
app.use('/api', require('./routes/api'));


mongoose.connect(process.env.MONGODB_URI || "mongodb://robbie2497:Softwaredev269@ds049211.mlab.com:49211/heroku_zcmrz6l3",
{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }
);

mongoose.connection.once('open', function () {
console.log('Connection to database has been made...');
}).on('error', function (error) {
console.log('Connection Error' + error);
});

app.get("*", (req, res) => {
  //change public back to build when deploying
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});