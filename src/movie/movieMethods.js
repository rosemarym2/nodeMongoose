const Movie = require("./movieModels");

exports.addMovie = async (movieObj) =>{
    try {
        const movie = await new Movie(movieObj);
        await movie.save();
        console.log(`Successfully added ${movie.title}`)
    } catch (error) {
        console.log(error)
    }
};

exports.listMovies = async () => {
    try {
        console.log(await Movie.find({}))
    } catch (error) {
        console.log(error)
    } 
};

exports.updateMovie = async (movieObj) => {
    try {
        console.log(await Movie.updateOne({title: movieObj.title}, {actor: movieObj.actor, rating: movieObj.rating, year: movieObj.year}, {upsert: true}))
        console.log(`Successfully Updated Movie`)
    } catch (error) {
        console.log(error)
    } 
};

exports.deleteMovie = async (movieObj) => {
    try {
        console.log(await Movie.deleteOne(movieObj))
        console.log(`Successfully Deleted Movie`)
    } catch (error) {
        console.log(error)
    } 
};