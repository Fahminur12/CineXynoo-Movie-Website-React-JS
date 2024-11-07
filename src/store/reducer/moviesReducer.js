import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchTrendingMovies,
  fetchDetailMovie,
  fetchSearchMovies,
  fetchGenres,
  fetchRecommendedMovies,
  fetchSimilarMovies,
  fetchAllMovies,
} from "../action/moviesAction";

export const searchMovies = createAsyncThunk('movies/searchMovies', async (query) => {
  return await fetchSearchMovies(query);
});

export const getRecommendedMovies = createAsyncThunk(
  "movies/getRecommended",
  async (movieId) => {
    return await fetchRecommendedMovies(movieId);
  }
);

export const getSimilarMovies = createAsyncThunk(
  "movies/getSimilar",
  async (movieId) => {
    return await fetchSimilarMovies(movieId);
  }
);

export const getMovieDetail = createAsyncThunk(
  "movies/getDetail",
  async (movieId) => {
    const { movie, credits } = await fetchDetailMovie(movieId);
    return { movie, credits };
  }
);

export const getTrendingMovies = createAsyncThunk(
  "movies/getTrending",
  async () => {
    return await fetchTrendingMovies();
  }
);

export const getPopularMovies = createAsyncThunk(
  "movies/getPopular",
  async () => {
    return await fetchPopularMovies();
  }
);

export const getNowPlayingMovies = createAsyncThunk(
  "movies/getNowPlaying",
  async () => {
    return await fetchNowPlayingMovies();
  }
);

export const getAllMovies = createAsyncThunk("movies/getAll", async () => {
  return await fetchAllMovies();
});

export const getGenres = createAsyncThunk("movies/getGenres", async () => {
  return await fetchGenres();
});

// Create Slice
const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    allMovies: [],
    trending: [],
    popular: [],
    nowPlaying: [],
    genres: [],
    searchResults: [],
    recommendedMovies: [],
    similarMovies: [],
    movieDetail: null,
    movieCredits: null,
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    // Recommended Movies
    builder.addCase(getRecommendedMovies.fulfilled, (state, action) => {
      state.recommendedMovies = action.payload;
    });

    builder.addCase(getSimilarMovies.fulfilled, (state, action) => {
      state.similarMovies = action.payload;
    });

    builder
      .addCase(getAllMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllMovies.fulfilled, (state, action) => {
        state.allMovies = action.payload;
        state.status = "succeeded";
      })
      .addCase(getAllMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    // Now Playing Movies
    builder
      .addCase(getNowPlayingMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getNowPlayingMovies.fulfilled, (state, action) => {
        state.nowPlaying = action.payload;
        state.status = "succeeded";
      })
      .addCase(getNowPlayingMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload; 
    });

    // Trending Movies
    builder
      .addCase(getTrendingMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTrendingMovies.fulfilled, (state, action) => {
        state.trending = action.payload;
        state.status = "succeeded";
      })
      .addCase(getTrendingMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    // Popular Movies
    builder
      .addCase(getPopularMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPopularMovies.fulfilled, (state, action) => {
        state.popular = action.payload;
        state.status = "succeeded";
      })
      .addCase(getPopularMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    // Movie Detail
    builder
      .addCase(getMovieDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMovieDetail.fulfilled, (state, action) => {
        state.movieDetail = action.payload.movie;
        state.movieCredits = action.payload.credits;
        state.status = "succeeded";
      })
      .addCase(getMovieDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

      builder
      .addCase(searchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.searchResults = action.payload; // Update search results
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message; // Update error message
      });
  },
});

export default moviesSlice.reducer;
