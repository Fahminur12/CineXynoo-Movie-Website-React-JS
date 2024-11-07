import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Card = ({ movie, onClick }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/w500";
  const poster_path = `${BASE_URL}${movie.poster_path}`;

  return (
    <div
      className="w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden block rounded relative hover:scale-105 transition-all"
      onClick={onClick}
    >
      <img src={poster_path} alt={movie.title} />
      <div className="absolute bottom-0 h-16 backdrop-blur-3xl w-full bg-black/50 rounded-se-xl rounded-ss-xl p-2">
        <h2 className="text-ellipsis line-clamp-1 text-lg text-white poppins-medium">
          {movie.title}
        </h2>
        <div className="text-sm text-neutral-400 flex justify-between items-center poppins-thin">
          <p>{movie.release_date}</p>
          <p className="px-1 rounded-full text-xs text-white flex gap-1">
            <Icon
              icon="material-symbols:star"
              className="text-yellow-300 text-xs mt-0.5 poppins-thin  "
            />
            Rating: {movie.vote_average}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
