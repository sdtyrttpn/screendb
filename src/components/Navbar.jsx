import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMovies, setOpenMovies] = useState(false);
  const [openTV, setOpenTV] = useState(false);

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

  return (
    <nav className=" flex items-center w-full bg-gray-800 border-b-2 border-b-gray-700 p-4 h-20 sticky top-0 z-50 ">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-6">
          {/* logo */}
          <h2 id="nav__logo" className="shrink-0 font-bold text-4xl">
            <a href="/">
              <i className="fa-solid fa-film"></i> SCREEN
              <span className="text-yellow-400">DB</span>
            </a>
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
            <div
              className="container mx-auto flex flex-col text-start 
            
                        lg:flex-row lg:items-center lg:justify-between lg:gap-6"
            >
              {/* search bar */}
              <form className="relative w-[90%] mb-6 mx-auto lg:mb-0 lg:w-full">
                <input
                  type="text"
                  className="bg-neutral-800 py-2 ps-10 pe-4 text-slate-100 rounded-full border-2 border-gray-700 w-full"
                  placeholder="Search for a movie"
                />
                <button type="submit" className="absolute left-4 top-0 bottom-0">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>

              {/* menu links */}
              <ul className="flex flex-col gap-4 font-medium text-xl shrink-0 lg:flex-row lg:items-center">
                {/* Movies dropdown */}
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
                    <li className="hover:text-yellow-400 transition p-0 lg:border-b lg:border-gray-600 lg:py-2 ">
                      <a href="/movies-trending">Trending</a>
                    </li>

                    <li className="hover:text-yellow-400 transition p-0 lg:border-b lg:border-gray-600 lg:py-2">
                      <a href="/movies-now-playing">Now Playing</a>
                    </li>

                    <li className="hover:text-yellow-400 transition px-0 lg:py-2">
                      <a href="/movies-top-rated">Top Rated</a>
                    </li>
                  </ul>
                </li>

                {/* TV Shows dropdown */}
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
                    <li className="hover:text-yellow-400 transition p-0 lg:border-b lg:border-gray-600 lg:py-2 ">
                      <a href="/tv-shows-trending">Trending</a>
                    </li>

                    <li className="hover:text-yellow-400 transition p-0 lg:border-b lg:border-gray-600 lg:py-2">
                      <a href="/tv-shows-now-playing">Now Playing</a>
                    </li>

                    <li className="hover:text-yellow-400 transition px-0 lg:py-2">
                      <a href="/tv-shows-top-rated">Top Rated</a>
                    </li>
                  </ul>
                </li>

                {/* Watchlist */}
                <li className="hover:text-yellow-400 transition">
                  <a href="/watchlist" className="inline-flex items-center gap-2">
                    <i className="fa-solid fa-bookmark"></i>
                    <span>My Watchlist</span>
                  </a>
                </li>

                {/* Profile */}
                <li className="hover:text-yellow-400 transition">
                  <a href="/profile" className="inline-flex items-center gap-2">
                    <i className="fa-solid fa-user"></i>
                    <span>Profile</span>
                  </a>
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
