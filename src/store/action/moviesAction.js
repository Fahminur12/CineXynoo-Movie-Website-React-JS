import axios from "axios";


// pemanggilan env 
const API_KEY = "f1701f8950348d98566289dc47fb1c6f";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchGenres = async () => {
  const response = await axios.get(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
  );
  return response.data.genres;
};



export const fetchDetailMovie = async (movieId) => {
  const movieResponse = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  
  const creditsResponse = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );


  return {
    movie: movieResponse.data,
    credits: creditsResponse.data,
  };
};

export const fetchRecommendedMovies = async (movieId) => {
  const response = await axios.get(
   `${BASE_URL}/movie/${movieId}/recommendations?api_key=${API_KEY}`
  );
  console.log("Recommended Movies Response:", response.data); 
  return response.data.results;
};

export const fetchSimilarMovies = async (movieId) => {
  const response = await axios.get(
   `${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}`
  );
  console.log("Similar Movies Response:", response.data);
  return response.data.results;
};


export const fetchSearchMovies = async (query) => {
  console.log("Searching for:", query); 
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );
    console.log("Search Results:", response.data.results); 
    return response.data.results;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error; 
  }
};


export const fetchAllMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}`
  );
  console.log("All Movies Response:", response); 
  return response.data.results;
};



export const fetchTrendingMovies = async () => {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    console.log(response.data); 
    return response.data.results; 
  };
  
  export const fetchPopularMovies = async () => {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    console.log(response.data);
    return response.data.results;
  };
  
  export const fetchNowPlayingMovies = async () => {
    const response = await axios.get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
    console.log(response.data);
    return response.data.results;
  };
