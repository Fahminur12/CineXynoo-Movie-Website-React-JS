import React from "react";
import Card from "../../components/Card"; // Import Card untuk menampilkan film

const FavoriteView = ({ favoriteMovies, onCardClick }) => {
  return (
    <div className="container mx-auto py-10 px-5">
      <div className="mt-10 ml-5">
        <h2 className="text-3xl font-bold mb-5">Your Favorite Movies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {favoriteMovies.length > 0 ? (
            favoriteMovies.map((movie) => (
              <Card 
                key={movie.id} 
                movie={movie} 
                onClick={() => onCardClick(movie.id)}
              />
            ))
          ) : (
            <p className="text-white">You have no favorite movies yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoriteView;
