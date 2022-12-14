import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderedMovies,
    renderedShows = "";

  renderedMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error} Error</h3>
      </div>
    );
  console.log(renderedMovies);

  renderedShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => <MovieCard key={index} data={show} />)
    ) : (
      <div className="movies-error">
        <h3>{shows.Error} Error</h3>
      </div>
    );
  console.log(renderedShows);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderedMovies}</div>
      </div>
      <div className="movie-list">
        <h2>Series</h2>
        <div className="movie-container">{renderedShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;
