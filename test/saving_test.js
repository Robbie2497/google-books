const assert = require('assert');
const Favorites = require('../models/favorites');


// Describe tests
describe('Saving records', function() {

// Create tests
it('Saves a record to the database', function(done) {
    var favorite = new Favorites(
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

});