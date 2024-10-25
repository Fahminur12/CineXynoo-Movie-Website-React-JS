// SearchView.js
import React from "react";
import Card from "../../components/Card";

const SearchView = ({ query, searchResults, loading, error, onCardClick }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pt-20 px-10 ml-5">
      <h1 className="text-2xl font-bold mb-6">Search Results: "{query}"</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
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
