export const fetchFavoriteMovies = () => {
    return async (dispatch) => {
      dispatch({ type: 'FETCH_FAVORITES_REQUEST' });
      try {
        const response = await fetch('https://api.example.com/favorites');
        if (!response.ok) {
          throw new Error('Failed to fetch favorite movies');
        }
        const data = await response.json();
        dispatch({ type: 'SET_FAVORITE_MOVIES', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAVORITES_ERROR', error: error.message });
        console.error('Error fetching favorite movies:', error);
      }
    };
  };
  
  export const addFavorite = (movie) => {
    return {
      type: 'ADD_FAVORITE_MOVIE',
      payload: movie,
    };
  };
  
  export const removeFavorite = (movie) => {
    return {
      type: 'REMOVE_FAVORITE_MOVIE',
      payload: movie,
    };
  };
  
  export const addFavoriteMovie = (newFavoriteMovie) => {
    return async (dispatch) => {
      dispatch({ type: 'ADD_FAVORITE_REQUEST' });
      try {
        const response = await fetch('https://api.example.com/favorites', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newFavoriteMovie),
        });
  
        if (!response.ok) {
          throw new Error('Failed to add favorite movie');
        }
  
        const addedMovie = await response.json();
        dispatch({ type: 'ADD_FAVORITE_MOVIE', payload: addedMovie });
      } catch (error) {
        dispatch({ type: 'ADD_FAVORITE_ERROR', error: error.message });
        console.error('Error adding favorite movie:', error);
      }
    };
  };
  