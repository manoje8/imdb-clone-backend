import express from "express";
import Movie from "../controller/movie.controller.js";

const movieRouter = express();

movieRouter.get("/", Movie.fetchMovies);
movieRouter.get("/:id", Movie.getMovieById);
movieRouter.post("/add-movie", Movie.addMovie);
movieRouter.put("/update-movie/:id", Movie.updateMovie);
movieRouter.delete("/delete/:id", Movie.deleteMovie)

export default movieRouter