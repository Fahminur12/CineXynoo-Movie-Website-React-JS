import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import FavoriteView from "./FavoriteView"; 
import { fetchFavoriteMovies } from "../../store/action/favoriteAction";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector((state) => state.favorites.favoriteMovies); 
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchFavoriteMovies());
  }, [dispatch]);

  const handleCardClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <FavoriteView 
      favoriteMovies={favoriteMovies} 
      onCardClick={handleCardClick} 
    />
  );
};

export default FavoritesPage;
