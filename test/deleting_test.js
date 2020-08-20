const assert = require('assert');
const Favorites = require('../models/favorites');
const { Mongoose } = require('mongoose');


// Describe tests
describe('Deleting records', function() {

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
it('Delete one record from the database', function(done) {

    Favorites.findOneAndRemove({title: 'My Book' }).then(function() {
        Favorites.findOne({ title: 'My Book' }).then(function(result){
            assert(result === null);
            done();
        });
    });
});

});