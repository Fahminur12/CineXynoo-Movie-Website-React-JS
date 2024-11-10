// SearchView.js
import React from "react";
import Card from "../../components/Card";

const SearchView = ({ query, searchResults, loading, error, onCardClick }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pt-20 px-10 ml-5 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Search Results: "{query}"
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 lg:grid-cols-4 gap-1 justify-center mx-auto">
        {searchResults && searchResults.length > 0 ? (
          searchResults.map((movie) => (
            <Card
              key={movie.id}
              movie={movie}
              onClick={() => onCardClick(movie.id)}
            />
          ))
        ) : (
          <p>Tidak ada hasil ditemukan</p>
        )}
      </div>
    </div>
  );
};

export default SearchView;
