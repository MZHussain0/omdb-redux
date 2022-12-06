import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../../features/movies/movieSlice";
import MovieListing from "../MovieListing/MovieListing";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);
  return (
    <Fragment>
      <div className="banner-image"></div>
      <MovieListing />
    </Fragment>
  );
};

export default Home;
