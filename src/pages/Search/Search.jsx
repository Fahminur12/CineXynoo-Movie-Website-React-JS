import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SearchView from './SearchView'; 
import { getMovieDetail, searchMovies } from "../../store/reducer/moviesReducer";

const Search = () => {
  const dispatch = useDispatch();
  const { query } = useParams();
  const navigate = useNavigate();
  const { searchResults, status, error } = useSelector((state) => state.movies);

  const handleCardClick = (movieId) => {
    dispatch(getMovieDetail(movieId));
    navigate(`/movie/${movieId}`);
  };

  useEffect(() => {
    if (query) {
      dispatch(searchMovies(query)); 
    }
  }, [dispatch, query]);

  const loading = status === "loading";
  
  return (
    <SearchView
      query={query}
      searchResults={searchResults}
      loading={loading}
      error={error}
      onCardClick={handleCardClick}
    />
  );
};

export default Search;
