const Movie = require("./movieModels");

const mongoose = require("mongoose");

exports.addMovie = async (movieObj) =>{
    try {
        const movie = await new Movie(movieObj);
        await movie.save();
        console.log(`Successfully Added ${movie.title}`)
        mongoose.connection.close();
    } catch (error) {
        console.log(error)
    }
};

exports.listMovies = async () => {
    try {
        console.log(await Movie.find({}))
        mongoose.connection.close();
    } catch (error) {
        console.log(error)
    } 
};

exports.updateMovie = async (movieId, movieObj) => {
    try {
        const movie = await Movie.findById(movieId);
        console.log(await Movie.findByIdAndUpdate({_id: movieId._id}, {title: movieObj.title, actor: movieObj.actor, rating: movieObj.rating, year: movieObj.year}, {upsert: true}))
        console.log(`Successfully Updated ${movie.title}`)
        mongoose.connection.close();
    } catch (error) {
        console.log(error)
    } 
};

exports.deleteMovie = async (movieObj) => {
    try {
        const movie = await Movie(movieObj);
        console.log(await Movie.deleteOne(movieObj))
        console.log(`Successfully Deleted ${movie.title}`)
        mongoose.connection.close();
    } catch (error) {
        console.log(error)
    } 
};