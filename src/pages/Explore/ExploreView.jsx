
import React from "react";
import Card from "../../components/Card";

const ExploreView = ({
  movies,
  selectedGenre,
  handleGenreChange,
  genres = [],
  onCardClick,
}) => {
  return (
    <div className="pt-20 px-10">
      <h1 className="text-2xl font-bold mb-6">Explore Movies</h1>
      <div className="genre-filter pb-8">
        <label htmlFor="genre" className="text-white">
          Filter by Genre:{" "}
        </label>
        <select
          id="genre"
          value={selectedGenre}
          onChange={handleGenreChange}
          className="bg-gray-800 text-white"
        >
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {movies && movies.length > 0 ? (
          movies.map((movie) => <Card onClick={() => onCardClick(movie.id)} key={movie.id} movie={movie}  />)
        ) : (
          <p>Tidak ada film ditemukan.</p>
        )}
      </div>
    </div>
  );
};

export default ExploreView;