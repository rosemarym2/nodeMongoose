require("./db/connection")

const yargs = require("yargs");

const { addMovie, listMovies, updateMovie, deleteMovie } = require("./movie/movieMethods");

const app = async (args) =>{
    switch (process.argv[2]){
        case "add":
            addMovie({title: args.title, actor: args.actor, rating: args.rating, year: args.year})
        break;
        case "list":
            listMovies();
        break;
        case "update":
            updateMovie({_id: args._id}, {title: args.title, actor: args.actor, rating: args.rating, year: args.year})
        break;
        case "delete":
            deleteMovie({title: args.title, actor: args.actor, rating: args.rating, year: args.year})
        break;
        default: console.log("Incorrect Command");
    }
};

app(yargs.argv);