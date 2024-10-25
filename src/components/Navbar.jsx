import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies } from "../store/reducer/moviesReducer";
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const [getTheme, setTheme] = useContext(ThemeContext);
  const root = window.document.documentElement;

  const theme = useSelector((state) => state);
  console.log(theme);
  const handleTheme = () => {
    if (getTheme == "light") {
      setTheme("dark");
      root.classList.remove("light");
      root.classList.add("dark");
    } else {
      setTheme("light");
      root.classList.remove("dark");
      root.classList.add("light");
    }
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      const query = event.target.value;
      dispatch(searchMovies(query));
      navigate(`/search/${query}`);
    }
  };

  return (
    <header className="absolute top-0 w-full h-16 bg-gradient-to-b from-white dark:from-black to-transparent text-white z-50">
      <nav className="flex items-center justify-between h-full px-10">
        <div className=" flex items-center">
          <span className="navbar-start text-2xl font-medium text-violetPurple">
            CINE
          </span>
          <span className="navbar-start text-2xl font-medium ml-1 text-black dark:text-white">Xynoo</span>
          <div className="flex space-x-6 ml-5 poppins-medium ">
            <a href="/" className="text-black dark:text-white text-sm hover:text-violetPurple">
              Home
            </a>
            <a href="/ratings" className="text-black dark:text-white text-sm hover:text-violetPurple">
              Rated
            </a>
            <a
              href="/explore"
              className="text-black dark:text-white text-sm hover:text-violetPurple"
            >
              Explore
            </a>
            <a
              href="/favorites"
              className="text-black dark:text-white text-sm hover:text-violetPurple"
            >
              Favorites
            </a>
          </div>
        </div>
        <div className=" flex items-center mr-5 ">
          <div className="flex items-center mr-5 focus-within:text-violetPurple">
            <input
              type="text"
              placeholder="Search..."
              onKeyDown={handleSearch}
              className="input-search mr-6 p-1 pl-10 rounded-3xl bg-transparent w-60 border-black dark:border-white focus:outline-none focus:border-violetPurple border-2 relative hover:border-violetPurple"
            />
            <Icon icon="mingcute:search-line" className="ml-3 absolute text-black dark:text-white" />
          </div>
          <label className="swap swap-rotate mr-3 text-black dark:text-white">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
              checked={getTheme == "light" ? false : true}
              onChange={() => handleTheme()}
            />

            {/* sun icon */}
            <svg
              className="swap-off h-5 w-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-5 w-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
