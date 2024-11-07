import { Icon } from "@iconify/react/dist/iconify.js";
import Card from "../../components/Card";

const HomeView = ({
  trending = [],
  popular = [],
  nowPlaying = [],
  videoUrl,
  selectedMovie,
  scrollLeft,
  scrollRight,
  handleCardClick,
  trendingRef,
  popularRef,
  nowPlayingRef,
}) => {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden">
        <div className="relative w-full h-[900px] bg-center bg-no-repeat">
          {videoUrl ? (
            <div className="absolute inset-0 overflow-hidden">
              <iframe
                width="1920"
                height="1080"
                src={`${videoUrl}?autoplay=1&mute=1`}
                title={selectedMovie ? selectedMovie.title : "Movie Trailer"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full scale-[1.95] origin-center"
              ></iframe>
            </div>
          ) : (
            <div className="w-full h-full bg-gray-800"></div>
          )}

          <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-r from-white dark:from-[#1A1A1A] to-transparent z-10 w-full"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-white dark:from-[#1A1A1A] to-transparent z-10"></div>

          <div className="absolute inset-y-0 left-0 flex flex-col justify-center items-start p-10 space-y-4 z-20 mb-28 p-auto">
            <h1 className="text-white text-5xl font-bold poppins-bold text-left">
              {selectedMovie?.title || "Loading..."}
            </h1>
            <p className="text-white text-sm max-w-lg text-left poppins-thin">
              {selectedMovie?.release_date} |{" "}
              <span className="bg-violetPurple p-1 px-2 rounded-[20px]">
                {selectedMovie?.vote_average} Rating
              </span>{" "}
              | {selectedMovie?.overview || "No description available."}
            </p>
            <div className="flex space-x-3">
              <button className="flex items-center px-5 py-[10px] bg-white text-black text-sm rounded-[20px] transition duration-300 ease-in-out hover:bg-gray-300 poppins-regular">
                Watch Now
                <Icon icon="ion:play" className="ml-1 text-[20px] " />
              </button>
              <button
                className="flex items-center px-5 py-[10px] backdrop-blur-xl bg-gray-500/20 text-white text-sm rounded-[20px] transition duration-300 ease-in-out poppins-regular"
                onClick={() => handleCardClick(selectedMovie.id)}
              >
                Detail
                <Icon
                  icon="solar:map-arrow-right-line-duotone"
                  className="ml-2 text-[20px] "
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-white dark:bg-[#1A1A1A] p-10">
        <div className="container mx-auto my-10 relative -mt-72 z-30 text-white">
          <h2 className="text-black dark:text-white text-xl lg:text-2xl poppins-semibold mt-10 mb-5">
            Trending Now
          </h2>
          <div className="relative">
            <button
              onClick={() => scrollLeft(trendingRef)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
              <Icon icon="mdi:chevron-left" className="text-2xl" />
            </button>
            <div
              ref={trendingRef}
              className="flex overflow-x-auto space-x-2 pb-4 no-scrollbar"
            >
              {trending.map((movie) => (
                <div key={movie.id} onClick={() => handleCardClick(movie.id)}>
                  <Card movie={movie} />
                </div>
              ))}
            </div>
            <button
              onClick={() => scrollRight(trendingRef)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
              <Icon icon="mdi:chevron-right" className="text-2xl" />
            </button>
          </div>

          <h2 className="text-black dark:text-white text-xl lg:text-2xl mb-5 mt-10 poppins-semibold">
            Popular Movies
          </h2>
          <div className="relative">
            <button
              onClick={() => scrollLeft(popularRef)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
              <Icon icon="mdi:chevron-left" className="text-2xl" />
            </button>
            <div
              ref={popularRef}
              className="flex overflow-x-auto space-x-2 pb-4 no-scrollbar"
            >
              {popular.map((movie) => (
                <div key={movie.id} onClick={() => handleCardClick(movie.id)}>
                  <Card movie={movie} />
                </div>
              ))}
            </div>
            <button
              onClick={() => scrollRight(popularRef)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
              <Icon icon="mdi:chevron-right" className="text-2xl" />
            </button>
          </div>

          <h2 className="text-black dark:text-white text-xl lg:text-2xl poppins-semibold mb-5 mt-10">
            Now Playing Movies
          </h2>
          <div className="relative">
            <button
              onClick={() => scrollLeft(nowPlayingRef)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
              <Icon icon="mdi:chevron-left" className="text-2xl" />
            </button>
            <div
              ref={nowPlayingRef}
              className="flex overflow-x-auto space-x-2 pb-4 no-scrollbar"
            >
              {nowPlaying.map((movie) => (
                <div key={movie.id} onClick={() => handleCardClick(movie.id)}>
                  <Card movie={movie} />
                </div>
              ))}
            </div>
            <button
              onClick={() => scrollRight(nowPlayingRef)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
              <Icon icon="mdi:chevron-right" className="text-2xl" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeView;
