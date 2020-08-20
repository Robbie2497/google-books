const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and Model

const FavoritesSchema = new Schema(
    {
        image: {
            type: String,
            required: true            
        },
        title: {
            type: String,
            required: true
        },
         author: {
            type: Array,
            required: true
         },
        published: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }

    }
)

const Favorites = mongoose.model('favorites', FavoritesSchema);

module.exports = Favorites;