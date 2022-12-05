import React, { Fragment } from "react";
import { useEffect } from "react";
import MovieApi from "../../common/Apis/MovieApi";
import { APIKey } from "../../common/Apis/MovieApiKey";
import MovieListing from "../MovieListing/MovieListing";

const Home = () => {
  useEffect(() => {
    const movieText = "Galaxy";
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `?apikey=${APIKey}&s=${movieText}&type=movie`
      ).catch((err) => {
        console.log("Err:", err);
      });
      console.log(response);
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
