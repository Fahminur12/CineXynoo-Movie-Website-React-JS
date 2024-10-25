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
    <div >
      <section className="relative overflow-hidden">
        <div className="relative w-full h-[500px] bg-center bg-no-repeat">
          {videoUrl ? (
            <div className="absolute inset-0 overflow-hidden">
              <iframe
                width="1920"
                height="1080"
                src={`${videoUrl}?autoplay=1&mute=1`}
                title={selectedMovie?.title || "Movie Trailer"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full scale-[1.95] origin-center"
              ></iframe>
            </div>
          ) : (
            <div className="w-full h-full bg-gray-800"></div>
          )}
          <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-white dark:from-darkBlue to-transparent z-20"></div>
          <div className="absolute inset-y-0 left-0 flex flex-col justify-center items-start p-10 space-y-4 z-20">
            <h1 className=" text-white text-5xl font-bold poppins text-left">
              {selectedMovie?.title || "Loading..."}
            </h1>
            <p className="text-white text-sm max-w-lg text-left poppins">
              {selectedMovie?.release_date} | {selectedMovie?.vote_average}{" "}
              Rating | {selectedMovie?.overview || "No description available."}
            </p>
            <button className="flex items-center px-6 py-3 bg-violet-600 text-white text-lg rounded-lg shadow-[0_0_10px_#8b5cf6] transition duration-300 ease-in-out hover:bg-violet-700 hover:shadow-[0_0_20px_#8b5cf6,0_0_30px_#8b5cf6]">
              <Icon icon="mdi:play-circle-outline" className="mr-2 text-2xl" />
              Watch Now
            </button>
          </div>
        </div>
      </section>

      <main className="bg-white dark:bg-darkBlue">
        

        <div className="container mx-auto my-10 px-5">
          <h2 className="text-black dark:text-white text-xl lg:text-2xl font-bold mb-1 mt-10">
            Trending Now
          </h2>
          <div className="relative">
            <button
              onClick={() => scrollLeft(trendingRef)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
              <Icon icon="mdi:chevron-left" className="text-2xl" />
            </button>
            <div ref={trendingRef} className="flex overflow-x-auto space-x-2 pb-4 no-scrollbar">
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

          <h2 className="text-black dark:text-white text-xl lg:text-2xl font-bold mb-1 mt-10">
            Popular Movies
          </h2>
          <div className="relative">
            <button
              onClick={() => scrollLeft(popularRef)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
              <Icon icon="mdi:chevron-left" className="text-2xl" />
            </button>
            <div ref={popularRef} className="flex overflow-x-auto space-x-2 pb-4 no-scrollbar">
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

          <h2 className="text-black dark:text-white text-xl lg:text-2xl font-bold mb-1 mt-10">
            Now Playing Movies
          </h2>
          <div className="relative">
            <button
              onClick={() => scrollLeft(nowPlayingRef)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
              <Icon icon="mdi:chevron-left" className="text-2xl" />
            </button>
            <div ref={nowPlayingRef} className="flex overflow-x-auto space-x-2 pb-4 no-scrollbar">
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
