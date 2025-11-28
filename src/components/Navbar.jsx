import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMovies, setOpenMovies] = useState(false);
  const [openTV, setOpenTV] = useState(false);
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  function handleMenuToggle() {
    setMenuOpen((prev) => !prev);
  }

  function handleMoviesToggle() {
    setOpenMovies((prev) => !prev);
    setOpenTV(false);
  }

  function handleTVToggle() {
    setOpenTV((prev) => !prev);
    setOpenMovies(false);
  }

  function handleValue(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const query = value.trim();
    if (!query) return;

    navigate(`/search-results/${encodeURIComponent(query)}`);
  }

  return (
    <nav className="flex items-center w-full bg-gray-800 border-b-2 border-b-gray-700 p-4 h-20 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-6">
          {/* logo */}
          <h2 id="nav__logo" className="shrink-0 font-bold text-4xl">
            <Link to="/">
              <i className="fa-solid fa-film"></i> SCREEN
              <span className="text-yellow-400">DB</span>
            </Link>
          </h2>

          {/* menu */}
          <div
            id="nav__menu"
            className={`
              overflow-hidden bg-gray-800 transition-all duration-300 ease-in-out absolute top-20 right-0 left-0 w-full
              ${menuOpen ? "max-h-[800px] p-6" : "max-h-0 p-0"}
              lg:max-h-none lg:overflow-visible
              lg:static lg:bg-transparent lg:p-0
            `}
          >
            <div className="container mx-auto flex flex-col text-start lg:flex-row lg:items-center lg:justify-between lg:gap-6">
              {/* search bar */}
              <form
                onSubmit={handleSubmit}
                className="w-full mb-6 flex items-center lg:max-w-90 lg:mb-0 lg:ms-auto "
              >
                <input
                  type="text"
                  className="bg-gray-700 h-10 p-4 ps-6 w-full rounded-l-full text-slate-100 border-gray-700 border-r-0 outline-none border-2 placeholder:text-gray-400"
                  placeholder="Search for a movie"
                  value={value}
                  onChange={handleValue}
                />

                <button
                  type="submit"
                  className="bg-gray-700 h-10 rounded-r-full flex items-center justify-center px-3 border-2 border-gray-700 border-l-0 text-gray-200 cursor-pointer"
                >
                  <i className="fa-solid fa-magnifying-glass fa-lg"></i>
                </button>
              </form>

              {/* menu links */}
              <ul className="flex flex-col gap-4 font-medium text-xl shrink-0 lg:flex-row lg:items-center">
                {/* movies dropdown */}
                <li className="relative">
                  <button
                    className={`inline-flex items-center gap-2 transition cursor-pointer ${
                      openMovies ? "text-yellow-400" : "hover:text-yellow-400"
                    }`}
                    onClick={handleMoviesToggle}
                  >
                    <i className="fa-solid fa-video"></i>
                    <span>Movies</span>
                    <i
                      className={`fa-solid fa-chevron-right text-sm transition-transform ${
                        openMovies ? "rotate-90" : ""
                      }`}
                    ></i>
                  </button>

                  <ul
                    className={`
                      text-start ms-8 flex flex-col gap-2 text-lg
                      transition-all duration-300 overflow-hidden
                      ${openMovies ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"}
                      lg:absolute lg:ms-0 lg:left-0 lg:top-full
                      lg:bg-gray-800 lg:rounded-md lg:shadow-lg lg:min-w-50 lg:py-2 lg:px-2 lg:z-50 lg:gap-0 lg:pb-0
                    `}
                  >
                    <li className="hover:text-yellow-400 transition p-0 lg:border-b lg:border-gray-600 lg:py-2">
                      <Link to="/movies-trending">Trending</Link>
                    </li>
                    <li className="hover:text-yellow-400 transition p-0 lg:border-b lg:border-gray-600 lg:py-2">
                      <Link to="/movies-now-playing">Now Playing</Link>
                    </li>
                    <li className="hover:text-yellow-400 transition px-0 lg:py-2">
                      <Link to="/movies-top-rated">Top Rated</Link>
                    </li>
                  </ul>
                </li>

                {/* tv shows dropdown */}
                <li className="relative">
                  <button
                    className={`inline-flex items-center gap-2 transition cursor-pointer ${
                      openTV ? "text-yellow-400" : "hover:text-yellow-400"
                    }`}
                    onClick={handleTVToggle}
                  >
                    <i className="fa-solid fa-tv"></i>
                    <span>TV Shows</span>
                    <i
                      className={`fa-solid fa-chevron-right text-sm transition-transform ${
                        openTV ? "rotate-90" : ""
                      }`}
                    ></i>
                  </button>

                  <ul
                    className={`
                      text-start ms-8 flex flex-col gap-2 text-lg
                      transition-all duration-300 overflow-hidden
                      ${openTV ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"}
                      lg:absolute lg:ms-0 lg:left-0 lg:top-full
                      lg:bg-gray-800 lg:rounded-md lg:shadow-lg lg:min-w-50 lg:p-2 lg:z-50 lg:gap-0 lg:pb-0
                    `}
                  >
                    <li className="hover:text-yellow-400 transition p-0 lg:border-b lg:border-gray-600 lg:py-2">
                      <Link to="/tv-shows-trending">Trending</Link>
                    </li>
                    <li className="hover:text-yellow-400 transition p-0 lg:border-b lg:border-gray-600 lg:py-2">
                      <Link to="/tv-shows-now-playing">Now Playing</Link>
                    </li>
                    <li className="hover:text-yellow-400 transition px-0 lg:py-2">
                      <Link to="/tv-shows-top-rated">Top Rated</Link>
                    </li>
                  </ul>
                </li>

                {/* watchlist */}
                <li className="hover:text-yellow-400 transition">
                  <Link to="/watchlist" className="inline-flex items-center gap-2">
                    <i className="fa-solid fa-bookmark"></i>
                    <span>My Watchlist</span>
                  </Link>
                </li>

                {/* profile */}
                <li className="hover:text-yellow-400 transition">
                  <Link to="/profile" className="inline-flex items-center gap-2">
                    <i className="fa-solid fa-user"></i>
                    <span>Profile</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* menu icon for mobile */}
          <div className="lg:hidden cursor-pointer">
            <i
              className={`fa-solid fa-2xl ${menuOpen ? "fa-xmark" : "fa-bars"}`}
              onClick={handleMenuToggle}
            ></i>
          </div>
        </div>
      </div>
    </nav>
  );
}
