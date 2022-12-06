import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/Apis/MovieApi";
import { APIKey } from "../../common/Apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Galaxy";
    const response = await MovieApi.get(
      `?apikey=${APIKey}&s=${movieText}&type=movie`
    );
    return response.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesText = "Game";
    const response = await MovieApi.get(
      `?apikey=${APIKey}&s=${seriesText}&type=series`
    );
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, (state, action) => {
        console.log("Pending");
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        console.log("Fetched successfully");
        return { ...state, movies: payload };
      })
      .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
        console.log("Fetched successfully");
        return { ...state, shows: payload };
      })
      .addCase(fetchAsyncMovies.rejected, (state, action) => {
        state.status = "Rejected";
        console.log("Rejected");
      });
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export default movieSlice.reducer;
