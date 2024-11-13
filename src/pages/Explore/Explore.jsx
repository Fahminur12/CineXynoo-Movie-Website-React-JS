import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExploreView from "./ExploreView";
import {
  getAllMovies,
  getGenres,
  getMovieDetail,
} from "../../store/reducer/moviesReducer";
import { useNavigate } from "react-router-dom";
import Loadings from "../../components/Loadings";

const Explore = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allMovies, genres, status, error } = useSelector(
    (state) => state.movies
  );
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleCardClick = useCallback(
    (movieId) => {
      dispatch(getMovieDetail(movieId));
      navigate(`/movie/${movieId}`);
    },
    [dispatch, navigate]
  );

  const filterByGenre = (movies) => {
    if (!selectedGenre) return movies;
    return movies.filter((movie) =>
      movie.genre_ids.includes(parseInt(selectedGenre))
    );
  };

  const handleGenreChange = useCallback((event) => {
    setSelectedGenre(event.target.value);
  }, []);

  useEffect(() => {
    dispatch(getAllMovies());
    dispatch(getGenres());
  }, [dispatch]);

  if (status === "loading") {
    return <Loadings />;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const filteredMovies = filterByGenre(allMovies);

  return (
    <ExploreView
      movies={filteredMovies}
      selectedGenre={selectedGenre}
      handleGenreChange={handleGenreChange}
      genres={genres}
      onCardClick={handleCardClick}
    />
  );
};

export default Explore;
