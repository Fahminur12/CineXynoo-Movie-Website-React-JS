// ratingActions.js
export const ADD_RATING = "ADD_RATING";
export const REMOVE_RATING = "REMOVE_RATING";

export const removeRating = (movieId) => ({
  type: REMOVE_RATING,
  payload: { movieId },
});


export const addRating = (movieId, rating) => ({
  type: ADD_RATING,
  payload: { movieId, rating },
});
