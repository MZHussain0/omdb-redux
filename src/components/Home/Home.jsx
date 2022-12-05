import React, { Fragment } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MovieApi from "../../common/Apis/MovieApi";
import { APIKey } from "../../common/Apis/MovieApiKey";
import { addMovies } from "../../features/movies/movieSlice";
import MovieListing from "../MovieListing/MovieListing";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const movieText = "Galaxy";
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `?apikey=${APIKey}&s=${movieText}&type=movie`
      ).catch((err) => {
        console.log("Err:", err);
      });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);

  return (
    <Fragment>
      <div className="banner-image"></div>
      <MovieListing />
    </Fragment>
  );
};

export default Home;
