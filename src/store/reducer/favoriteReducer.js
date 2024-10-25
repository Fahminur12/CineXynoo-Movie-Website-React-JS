const initialState = {
  favoriteMovies: [],
  loading: false,
  error: null,
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_FAVORITES_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "SET_FAVORITE_MOVIES":
      return {
        ...state,
        favoriteMovies: action.payload,
        loading: false,
      };
    case "FETCH_FAVORITES_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "ADD_FAVORITE_MOVIE":
      return {
        ...state,
        favoriteMovies: [...state.favoriteMovies, action.payload],
      };
    case "REMOVE_FAVORITE_MOVIE":
      return {
        ...state,
        favoriteMovies: state.favoriteMovies.filter(
          (movie) => movie.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default favoriteReducer;
