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
    <div className="min-h-screen">
      <div className="w-full h-[580px] relative">
        <div className="w-full h-full">
          <img
            src={backdrop_path}
            className="h-full w-full object-cover"
            alt="Backdrop"
          />
        </div>
        <div className="absolute w-full h-full top-0 bg-gradient-to-r from-white dark:from-[#1A1A1A] to-transparent"></div>
        <div className="absolute w-full h-full top-0 bg-gradient-to-t from-white dark:from-[#1A1A1A] to-transparent"></div>
      </div>
      <div className="container mx-auto px-40 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10">
        <div className="relative mx-auto lg:-mt-28 lg:mx-0 w-fit min-w-60">
          <img
            src={poster_path}
            className="h-80 w-60 object-cover rounded"
            alt="Poster"
          />
          <button className="mt-3 w-full py-2 px-4 text-center bg-white text-black text-lg rounded-lg shadow-[0_0_10px_#f4f4f4] transition duration-300 ease-in-out hover:bg-neutral-300 hover:shadow-[0_0_20px_#f4f4f4,0_0_30px_#f4f4f4] poppins-medium flex items-center justify-center">
            <Icon icon="carbon:play-filled" className="mr-2" />
            Play Now
          </button>
        </div>
        <div className="text-black dark:text-white -mt-20 z-20">
          <h2 className="text-2xl lg:text-4xl poppins-bold mb-1">
            {movieDetail.title}
          </h2>
          <p className="text-neutral-400 text-xs poppins-regular">
            {movieDetail.tagline}
          </p>
          <div className="flex items-center gap-3 mt-3 text-sm poppins-medium">
            <p className="flex py-1 px-3 border-[1px] border-white rounded-[20px]">
              <Icon icon="prime:star-fill" className="my-auto mr-1" /> Rating:{" "}
              {movieDetail.vote_average}+
            </p>
            <p className="flex py-1 px-3 border-[1px] border-white rounded-[20px]">
              <Icon icon="heroicons-solid:eye" className="my-auto mr-1" />
              View: {movieDetail.vote_count}
            </p>
            <p className="flex py-1 px-3 border-[1px] border-white rounded-[20px]">
              <Icon icon="svg-spinners:clock" className="my-auto mr-1" />
              Duration: {movieDetail.runtime}m
            </p>
          </div>
          <div className="bg-violet-700 p-[1px] rounded-full my-3"></div>
          <div className="text-sm">
            <h3 className="text-xl poppins-semibold mb-1">Overview</h3>
            <p className="poppins-light text-xs text-neutral-400">
              {movieDetail.overview}
            </p>
            <div className="flex items-center gap-3 my-3 text-sm text-center poppins-medium">
              <p>Status: {movieDetail.status}</p>
              <span>|</span>
              <p>Release Date: {movieDetail.release_date}</p>
              <span>|</span>
              <p>Revenue: {movieDetail.revenue}</p>
            </div>
            <div className="bg-violet-700 p-[1px] rounded-full my-3"></div>
            <div className="poppins-regular text-sm">
              <p>
                <span className="">Director</span> : {director?.name || "N/A"}
              </p>
              <p>
                <span className="">Writer</span> : {writer?.name || "N/A"}
              </p>
            </div>
            <div className="bg-violet-700 p-[1px] rounded-full my-3"></div>
            <div className="flex space-x-5">
              <div className="mt-3">
                <h3 className="text-xl poppins-semibold mb-1 ">
                  Rate This Movie
                </h3>
                <div className="flex">
                  <div className="flex -space-x-1 my-auto">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <Icon
                        key={rating}
                        icon="material-symbols-light:star-rate"
                        className={`cursor-pointer ${
                          userRating >= rating
                            ? "text-yellow-500"
                            : "text-gray-400"
                        }`}
                        onClick={() => onRating(rating)}
                        width="34"
                        height="34"
                      />
                    ))}
                  </div>
                  {userRating > 0 && (
                    <button
                      className="ml-3 py-3 px-3 rounded-lg bg-red-600 text-white text-lg"
                      onClick={onRemoveRating}
                    >
                      <Icon icon="fluent:delete-32-regular" />
                    </button>
                  )}
                </div>
              </div>
              <div className="p-[0.5px] my-3 bg-white"></div>
              <div className="flex justify-between mt-3">
                <div>
                  <h3 className="text-xl poppins-semibold mb-1 ">
                    Add To List
                  </h3>
                  <button
                    className={`mb-5 py-3 px-3 text-lg rounded-lg text-white ${
                      isFavorite ? "bg-red-600" : "bg-violetPurple"
                    }`}
                    onClick={onFavoriteClick}
                  >
                    {isFavorite ? (
                      <Icon icon="fluent:delete-48-regular" />
                    ) : (
                      <Icon icon="stash:save-ribbon" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-violet-700 p-[0.5px] rounded-full my-3"></div>
            <div>
              <h3 className="text-xl poppins-semibold mb-5">Cast</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10 items-center">
                {cast.slice(0, 4).map((member) => (
                  <div key={member.id} className="text-center">
                    <img
                      src={`${BASE_URL}${member.profile_path}`}
                      alt={member.name}
                      className="w-full h-full object-cover block mx-auto rounded-lg"
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
      <div className="px-9 mb-5">
        <div className="relative">
          <h3 className="text-xl font-bold  mb-5">Recommended Movies</h3>
        </div>
        <div className="">
          <div className="flex items-center">
            <button
              className="absolute left-0 z-10 p-2 bg-black/60 rounded-full ml-10"
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
              className="flex overflow-x-auto space-x-2 pb-4 no-scrollbar"
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
              className="absolute right-0 z-10 p-2 bg-black/60 rounded-full mr-10"
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
      <div className="px-9">
        <div className="relative">
          <h3 className="text-xl font-bold  mb-5">Similar Movies</h3>
        </div>
        <div className="overflow-x-hidden">
          <div className="flex items-center">
            <button
              className="absolute left-0 z-10 p-2 bg-black/60 rounded-full ml-10"
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
              className="flex overflow-x-auto space-x-2 pb-4 no-scrollbar"
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
              className="absolute right-0 z-10 p-2 bg-black/60 rounded-full mr-10"
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
