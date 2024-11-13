import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getMovieDetail,
  getRecommendedMovies,
  getSimilarMovies,
} from "../../store/reducer/moviesReducer";

import MovieDetailView from "./MovieDetailView";
import { addFavorite, removeFavorite } from "../../store/action/favoriteAction";
import { addRating, removeRating } from "../../store/action/ratingAction";
import Loadings from "../../components/Loadings";

const BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const scrollRefSimilar = useRef(null);
  const ratings = useSelector((state) => state.ratings.ratings); 

  const [userRating, setUserRating] = useState(ratings[id] || 0);

  const handleRating = (rating) => {
    setUserRating(rating); 
    dispatch(addRating(id, rating)); 
  };

  const handleRemoveRating = () => {
    setUserRating(0); 
    dispatch(removeRating(id)); 
  };

  const handleCardClick = (movieId) => {
    dispatch(getMovieDetail(movieId));
    navigate(`/movie/${movieId}`);
  };

  const {
    movieDetail,
    movieCredits,
    recommendedMovies,
    similarMovies,
    status,
    error,
  } = useSelector((state) => state.movies);
  const favoriteMovies = useSelector((state) => state.favorites.favoriteMovies);

  useEffect(() => {
    dispatch(getMovieDetail(id));
    dispatch(getRecommendedMovies(id));
    dispatch(getSimilarMovies(id));
  }, [dispatch, id]);

  const isFavorite = favoriteMovies.some(
    (movie) => movie.id === movieDetail?.id
  );

  const handleFavoriteClick = useCallback(() => {
    if (movieDetail && movieDetail.id) {
      if (isFavorite) {
        dispatch(removeFavorite(movieDetail));
      } else {
        dispatch(addFavorite(movieDetail));
      }
    }
  }, [dispatch, movieDetail, isFavorite]);

  const scrollLeft = useCallback((ref) => {
    ref.current.scrollBy({ left: -300, behavior: "smooth" });
  }, []);

  const scrollRight = useCallback((ref) => {
    ref.current.scrollBy({ left: 300, behavior: "smooth" });
  }, []);

  if (status === "loading") {
    return <Loadings />;
  }
  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  if (!movieDetail) {
    return <div>No movie details found.</div>;
  }

  const backdrop_path = `${BASE_URL}${movieDetail.backdrop_path}`;
  const poster_path = `${BASE_URL}${movieDetail.poster_path}`;
  const director = movieCredits?.crew?.find(
    (person) => person.job === "Director"
  ) || { name: "N/A" };
  const writer = movieCredits?.crew?.find(
    (person) => person.job === "Writer"
  ) || { name: "N/A" };
  const cast = movieCredits?.cast || [];

  return (
    <MovieDetailView
      movieDetail={movieDetail}
      backdrop_path={backdrop_path}
      poster_path={poster_path}
      director={director}
      writer={writer}
      cast={cast}
      recommendedMovies={recommendedMovies}
      similarMovies={similarMovies}
      isFavorite={isFavorite}
      onFavoriteClick={handleFavoriteClick}
      scrollLeft={scrollLeft}
      scrollRight={scrollRight}
      scrollRef={scrollRef}
      scrollRefSimilar={scrollRefSimilar}
      BASE_URL={BASE_URL}
      onCardClick={handleCardClick}
      userRating={userRating} 
      onRating={handleRating}
      onRemoveRating={handleRemoveRating}
    />
  );
};

export default MovieDetail;
