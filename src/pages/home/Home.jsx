import { useEffect, useRef, useState } from "react";
import HomeView from "./HomeView";
import { useDispatch, useSelector } from "react-redux";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTrendingMovies,
  getGenres,
  getMovieDetail,
} from "../../store/reducer/moviesReducer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const { trending, popular, nowPlaying, genres, status, error } = useSelector(
    (state) => state.movies
  );
  const trendingRef = useRef(null);
  const popularRef = useRef(null);
  const nowPlayingRef = useRef(null);
  const navigate = useNavigate();
  const [videoUrl, setVideoUrl] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const isLoading = status === "loading";

  useEffect(() => {
    dispatch(getTrendingMovies());
    dispatch(getPopularMovies());
    dispatch(getNowPlayingMovies());
  }, [dispatch]);

  useEffect(() => {
    if (popular.length > 0) {
      const randomMovie = popular[Math.floor(Math.random() * popular.length)];
      setSelectedMovie(randomMovie);
      fetchMovieTrailer(randomMovie.id);
    }
  }, [popular]);

  const fetchMovieTrailer = async (movieId) => {
    const API_KEY = "f1701f8950348d98566289dc47fb1c6f";
    const BASE_URL = "https://api.themoviedb.org/3";

    try {
      const response = await axios.get(
        `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`
      );
      const populars = response.data.results.filter(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );
      setVideoUrl(
        populars.length > 0
          ? `https://www.youtube.com/embed/${populars[0].key}?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0`
          : null
      );
    } catch (error) {
      console.error("Failed to fetch movie trailer:", error);
      setVideoUrl(null);
    }
  };

  const filterByGenre = (movies) => {
    if (!selectedGenre) return movies;
    return movies.filter((movie) =>
      movie.genre_ids.includes(parseInt(selectedGenre))
    );
  };

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleCardClick = (movieId) => {
    dispatch(getMovieDetail(movieId));
    navigate(`/movie/${movieId}`);
  };

  const scroll = (ref, direction) => {
    if (ref.current) {
      console.log(ref.current);
      ref.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    } else {
      console.error("Ref is null");
    }
  };

  if (status === "failed") {
    return <div>Error: {error}. Please try again later.</div>;
  }

  return (
    <div>
      <HomeView
        trending={filterByGenre(trending)}
        popular={filterByGenre(popular)}
        nowPlaying={filterByGenre(nowPlaying)}
        genres={genres}
        videoUrl={videoUrl}
        selectedMovie={selectedMovie}
        scrollLeft={(ref) => scroll(ref, "left")}
        scrollRight={(ref) => scroll(ref, "right")}
        handleCardClick={handleCardClick}
        trendingRef={trendingRef}
        popularRef={popularRef}
        nowPlayingRef={nowPlayingRef}
        selectedGenre={selectedGenre}
        handleGenreChange={handleGenreChange}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Home;
