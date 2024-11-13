import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import FavoriteView from "./FavoriteView";
import { fetchFavoriteMovies } from "../../store/action/favoriteAction";
import Loadings from "../../components/Loadings";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector((state) => state.favorites.favoriteMovies);
  const navigate = useNavigate();
  const status = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchFavoriteMovies());
  }, [dispatch]);

  const handleCardClick = (id) => {
    navigate(`/movie/${id}`);
  };

  if (status === "loading") {
    return <div>Loading</div>;
  }

  return (
    <FavoriteView
      favoriteMovies={favoriteMovies}
      onCardClick={handleCardClick}
    />
  );
};

export default FavoritesPage;
