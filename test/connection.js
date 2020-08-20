const mongoose = require('mongoose');


// Connect to the db before tests run
before(function (done) {

    // Connect to MongoDB
    mongoose.connect('mongodb://localhost/favorites',
        { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }
    );

    mongoose.connection.once('open', function () {
        console.log('Connection has been made...');
        done();
    }).on('error', function (error) {
        console.log('Connection Error' + error);
    });
});

// Drop the favorites collection before each test
beforeEach(function(done) {
    // Drop the collection
    mongoose.connection.collections.favorites.drop(function() {
        done();
    })
})