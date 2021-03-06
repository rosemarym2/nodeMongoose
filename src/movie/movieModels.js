const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title:{
        type: String,
        unique: true,
        required: [true, "Please check title entry, no name specified"]
    },
    actor: {
        type: String,
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    year:{
        type: Number,
        min: 1888,
        max: 2200,
        required: [true, "Please check title entry, not a valid year"]
    }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
