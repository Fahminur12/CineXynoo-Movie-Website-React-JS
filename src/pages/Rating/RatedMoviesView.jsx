import React from "react";
import Card from "../../components/Card"; 

const RatedMoviesView = ({ movieIds, ratedMovies, ratings, handleCardClick }) => {
  return (
    <div className="ml-5 pt-20">
      <h1 className="text-2xl font-bold mb-5">Rated Movies</h1>
      {movieIds.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {ratedMovies.map((movie) => {
            if (ratings[movie.id]) {
              return (
                <div key={movie.id} className="mx-1">
                  <Card
                    movie={movie}
                    onClick={() => handleCardClick(movie.id)}
                  />
                </div>
              );
            }
            return null; 
          })}
        </div>
      ) : (
        <p>No rated movies yet.</p>
      )}
    </div>
  );
};

export default RatedMoviesView;
