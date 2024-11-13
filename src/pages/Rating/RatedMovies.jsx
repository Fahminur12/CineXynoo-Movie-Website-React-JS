import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieDetail } from "../../store/reducer/moviesReducer";
import RatedMoviesView from "./RatedMoviesView"; 
import { useNavigate } from "react-router-dom";

const RatedMovies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ratings = useSelector((state) => state.ratings.ratings);
  const movieIds = Object.keys(ratings);
  const ratedMovies = useSelector((state) => state.movies.allMovies || []);

  const handleCardClick = (movieId) => {
    dispatch(getMovieDetail(movieId));
    navigate(`/movie/${movieId}`);
  };

  useEffect(() => {
    movieIds.forEach((id) => {
      dispatch(getMovieDetail(id));
    });
  }, [dispatch, movieIds]);

  if (status === "loading") {
    return <Loadings />;
  }

  return (
    <RatedMoviesView
      movieIds={movieIds}
      ratedMovies={ratedMovies}
      ratings={ratings}
      handleCardClick={handleCardClick}
    />
  );
};

export default RatedMovies;
