import { ADD_RATING, REMOVE_RATING } from "../action/ratingAction";

const initialState = {
  ratings: {},
};

const ratingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RATING: {
      const { movieId, rating } = action.payload;
      return {
        ...state,
        ratings: {
          ...state.ratings,
          [movieId]: rating,
        },
      };
    }
    case REMOVE_RATING: {
      const { movieId } = action.payload;
      const { [movieId]: _, ...newRatings } = state.ratings; 
      return {
        ...state,
        ratings: newRatings,
      };
    }
    default:
      return state;
  }
};

export default ratingReducer;
