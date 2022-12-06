import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
import MovieListing from "../MovieListing/MovieListing";

const Home = () => {
  const movieText = "ring";
  const seriesText = "prince";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(seriesText));
  }, [dispatch]);
  return (
    <Fragment>
      <div className="banner-image"></div>
      <MovieListing />
    </Fragment>
  );
};

export default Home;
