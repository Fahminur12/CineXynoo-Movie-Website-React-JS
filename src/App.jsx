import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store"; // Import persistor
import Home from "./pages/home/Home";
import MovieDetail from "./pages/Detail/MovieDetail";
import Search from "./pages/Search/Search";
import ThemeContext from "./components/context/ThemeContext";
import { useState } from "react";
import Footer from "./components/Footer";
import Explore from "./pages/Explore/Explore";
import Favorite from "./pages/Favorite/Favorite";
import RatedMovies from "./pages/Rating/RatedMovies";

function App() {
  const theme = useState("light");

  return (
    <div className="bg-white dark:bg-[#1A1A1A]">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <ThemeContext.Provider value={theme}>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<MovieDetail />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/search" element={<Search />} />
                <Route path="/favorites" element={<Favorite />} />
                <Route path="/ratings" element={<RatedMovies />} />
                <Route path="/search/:query" element={<Search />} />
              </Routes>
              <Footer />
            </ThemeContext.Provider>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
