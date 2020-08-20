const assert = require('assert');
const Favorites = require('../models/favorites');


// Describe tests
describe('Finding records', function() {

    var favorite;

    beforeEach(function(done) {
     favorite = new Favorites(
        {
            key: '1',
            image: 'No image',
            title: 'My Book',
             author: 'Me',
            published: '2020',
            link: 'No link'
        }
    )
    
        favorite.save().then(function() {
            assert(favorite.isNew === false);
            done();
        });
    });

// Create tests
it('Find all records from the database', function(done) {

    Favorites.find({}).then(function(result) {
        assert(result);
        done();
    });

});

it('Find a record from the database by id', function(done) {

    Favorites.findOne({ _id: favorite._id }).then(function(result) {
        assert(result._id.toString() === favorite._id.toString());
        done();
    });

});

});