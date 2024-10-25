import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./reducer/favoriteReducer";
import moviesReducer from "./reducer/moviesReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // default to localStorage for web
import { combineReducers } from "redux";
import themeReducer from "./reducer/themeReducer";
import ratingReducer from "./reducer/ratingReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  favorites: favoriteReducer,
  movies: moviesReducer,
  theme: themeReducer,
  ratings: ratingReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
