import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Card from "../../components/Card";

const MovieDetailView = ({
  movieDetail,
  backdrop_path,
  poster_path,
  director,
  writer,
  cast,
  recommendedMovies,
  similarMovies,
  isFavorite,
  onFavoriteClick,
  scrollLeft,
  scrollRight,
  scrollRef,
  scrollRefSimilar,
  BASE_URL,
  onCardClick,
  userRating,
  onRating,
  onRemoveRating,
}) => {
  return (
    <div>
      <div className="w-full h-[580px] relative">
        <div className="w-full h-full">
          <img
            src={backdrop_path}
            className="h-full w-full object-cover"
            alt="Backdrop"
          />
        </div>
        <div className="absolute w-full h-full top-0 bg-gradient-to-t from-white dark:from-[#202334] to-transparent"></div>
      </div>
      <div className="container mx-auto px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10">
        <div className="relative mx-auto lg:-mt-28 lg:mx-0 w-fit min-w-60">
          <img
            src={poster_path}
            className="h-80 w-60 object-cover rounded"
            alt="Poster"
          />
          <button className="mt-3 w-full py-2 px-4 text-center bg-violet-600 text-white text-lg rounded-lg shadow-[0_0_10px_#8b5cf6] transition duration-300 ease-in-out hover:bg-violet-700 hover:shadow-[0_0_20px_#8b5cf6,0_0_30px_#8b5cf6]">
            Play Now
          </button>
        </div>
        <div className="text-black dark:text-white">
          <h2 className="text-2xl lg:text-4xl font-bold ">
            {movieDetail.title}
          </h2>
          <p className="text-neutral-400">{movieDetail.tagline}</p>
          <div className="bg-violet-700 p-[0.5px] rounded-full my-3"></div>
          <div className="flex items-center gap-3">
            <p>Rating: {movieDetail.vote_average}+</p>
            <span>|</span>
            <p>View: {movieDetail.vote_count}</p>
            <span>|</span>
            <p>Duration: {movieDetail.runtime}m</p>
          </div>
          <div className="bg-violet-700 p-[0.5px] rounded-full my-3"></div>
          <div>
            <h3 className="text-xl font-bold  mb-1">Overview</h3>
            <p>{movieDetail.overview}</p>
            <div className="bg-violet-700 p-[0.5px] rounded-full my-3"></div>
            <div className="flex items-center gap-3 my-3 text-center">
              <p>Status: {movieDetail.status}</p>
              <span>|</span>
              <p>Release Date: {movieDetail.release_date}</p>
              <span>|</span>
              <p>Revenue: {movieDetail.revenue}</p>
            </div>
            <div className="bg-violet-700 p-[0.5px] rounded-full my-3"></div>
            <div>
              <p>
                <span className="">Director</span>: {director?.name || "N/A"}
              </p>
              <p>
                <span className="">Writer</span>: {writer?.name || "N/A"}
              </p>
            </div>
            <div className="bg-violet-700 p-[0.5px] rounded-full my-3"></div>
            <div>
              <h3 className="text-xl font-bold mb-1">Rate This Movie</h3>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <Icon
                    key={rating}
                    icon="mdi:star"
                    className={`cursor-pointer ${
                      userRating >= rating ? "text-yellow-500" : "text-gray-400"
                    }`}
                    onClick={() => onRating(rating)}
                    width="24"
                    height="24"
                  />
                ))}
              </div>
            </div>
            <div className="bg-violet-700 p-[0.5px] rounded-full my-3"></div>
            <div className="flex justify-between mt-5">
              <div>
                <button
                  className="mb-5 py-2 px-4 text-lg rounded-lg bg-violetPurple text-white"
                  onClick={onFavoriteClick}
                >
                  {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                </button>
                {userRating > 0 && ( // Show the remove button only if there's a rating
                  <button
                    className="ml-5 mb-5 py-2 px-4 rounded-lg bg-red-600 text-white text-lg"
                    onClick={onRemoveRating} // Call the remove function
                  >
                    Remove Rating
                  </button>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Cast</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {cast.slice(0, 8).map((member) => (
                  <div key={member.id} className="text-center">
                    <img
                      src={`${BASE_URL}${member.profile_path}`}
                      alt={member.name}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <p className="mt-2">{member.name}</p>
                    <p className="text-sm text-neutral-400">
                      {member.character}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Recommended Movies */}
      <div className="px-5">
        <div className="relative">
          <h3 className="text-xl font-bold  mb-2">Recommended Movies</h3>
        </div>
        <div className="overflow-x-hidden">
          <div className="flex items-center">
            <button
              className="absolute left-0 z-10 p-2 bg-black/60 rounded-full ml-5"
              onClick={() => scrollLeft(scrollRef)}
            >
              <Icon
                icon="ic:round-arrow-left"
                className="text-white"
                width="24"
                height="24"
              />
            </button>
            <div
              className="flex overflow-x-auto space-x-4 scrollbar-hide scroll-smooth"
              ref={scrollRef}
            >
              {recommendedMovies.map((movie) => (
                <Card
                  key={movie.id}
                  movie={movie}
                  onClick={() => onCardClick(movie.id)}
                />
              ))}
            </div>
            <button
              className="absolute right-0 z-10 p-2 bg-black/60 rounded-full mr-5"
              onClick={() => scrollRight(scrollRef)}
            >
              <Icon
                icon="ic:round-arrow-right"
                className="text-white"
                width="24"
                height="24"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Similar Movies */}
      <div className="px-5">
        <div className="relative">
          <h3 className="text-xl font-bold  mb-2">Similar Movies</h3>
        </div>
        <div className="overflow-x-hidden">
          <div className="flex items-center">
            <button
              className="absolute left-0 z-10 p-2 bg-black/60 rounded-full ml-5"
              onClick={() => scrollLeft(scrollRefSimilar)}
            >
              <Icon
                icon="ic:round-arrow-left"
                className="text-white"
                width="24"
                height="24"
              />
            </button>
            <div
              className="flex overflow-x-auto space-x-4 scrollbar-hide scroll-smooth"
              ref={scrollRefSimilar}
            >
              {similarMovies.map((movie) => (
                <Card
                  key={movie.id}
                  movie={movie}
                  onClick={() => onCardClick(movie.id)}
                />
              ))}
            </div>
            <button
              className="absolute right-0 z-10 p-2 bg-black/60 rounded-full mr-5"
              onClick={() => scrollRight(scrollRefSimilar)}
            >
              <Icon
                icon="ic:round-arrow-right"
                className="text-white"
                width="24"
                height="24"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailView;
