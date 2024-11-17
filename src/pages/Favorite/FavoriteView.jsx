import React from "react";
import Card from "../../components/Card"; // Import Card untuk menampilkan film

const FavoriteView = ({ favoriteMovies, onCardClick }) => {
  return (
    <div className="mx-auto py-10 px-5 min-h-screen ">
      <div className="mt-10 ml-5">
        <h2 className="text-3xl font-bold mb-5">Your Favorite Movies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 lg:grid-cols-4 gap-1 justify-center mx-auto">
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
