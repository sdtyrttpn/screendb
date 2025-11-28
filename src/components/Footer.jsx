import tmdbLogo from "../assets/img/tmdbLogo.png";

export default function Footer() {
  return (
    <div className="bg-gray-800 p-8 border-t-2 border-t-gray-700 w-full">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-6 items-stretch lg:grid-cols-5">
          {/* Movies */}
          <div className="h-full flex flex-col">
            <h5 className="font-semibold mb-3">Movies</h5>
            <ul className="pe-4 lg:border-e border-gray-600">
              <li className="mb-1 hover:text-yellow-400 transition text-gray-300 truncate">
                <a href="/movies-trending">Trending Movies</a>
              </li>
              <li className="mb-1 hover:text-yellow-400 transition text-gray-300 truncate">
                <a href="/movies-now-playing">Now Playing Movies</a>
              </li>
              <li className="mb-1 hover:text-yellow-400 transition text-gray-300 truncate">
                <a href="/movies-top-rated">Top Rated Movies</a>
              </li>
            </ul>
          </div>

          {/* Tv Shows */}
          <div className="h-full flex flex-col">
            <h5 className="font-semibold mb-3">Tv Shows</h5>
            <ul className="pe-4 lg:border-e border-gray-600">
              <li className="mb-1 hover:text-yellow-400 transition text-gray-300 truncate">
                <a href="/tv-shows-trending">Trending Tv Shows</a>
              </li>
              <li className="mb-1 hover:text-yellow-400 transition text-gray-300 truncate">
                <a href="/tv-shows-now-playing">Now Playing Tv Shows</a>
              </li>
              <li className="mb-1 hover:text-yellow-400 transition text-gray-300 truncate">
                <a href="/tv-shows-top-rated">Top Rated Tv Shows</a>
              </li>
            </ul>
          </div>

          {/* Main Pages */}
          <div className="h-full flex flex-col">
            <h5 className="font-semibold mb-3">Main Pages</h5>
            <ul className="pe-4 lg:border-e border-gray-600">
              <li className="mb-1 hover:text-yellow-400 transition text-gray-300 truncate">
                <a href="">Home</a>
              </li>
              <li className="mb-1 hover:text-yellow-400 transition text-gray-300 truncate">
                <a href="">Profile</a>
              </li>
              <li className="mb-1 hover:text-yellow-400 transition text-gray-300 truncate">
                <a href="">My Watchlist</a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="h-full flex flex-col">
            <h5 className="font-semibold mb-3">Socials</h5>
            <ul className="pe-4 lg:border-e border-gray-600">
              <li className="mb-1 hover:text-yellow-400 transition text-gray-300 truncate">
                <a href="https://facebook.com" target="_blank">
                  <i className="fa-brands fa-square-facebook" /> Facebook
                </a>
              </li>
              <li className="mb-1 hover:text-yellow-400 transition text-gray-300 truncate">
                <a href="https://instagram.com" target="_blank">
                  <i className="fa-brands fa-instagram" /> Instagram
                </a>
              </li>
              <li className="mb-1 hover:text-yellow-400 transition text-gray-300 truncate ">
                <a href="https://x.com" target="_blank">
                  <i className="fa-brands fa-x-twitter" /> X (Twitter)
                </a>
              </li>
            </ul>
          </div>

          {/* TMDB */}
          <div className="col-span-2 h-full flex flex-col items-center justify-center lg:col-span-1">
            <img src={tmdbLogo} alt="TMDB Logo" className="w-14 mx-auto" />
            <p className="text-gray-300 mt-2 text-center">This product uses the TMDB API.</p>
          </div>
        </div>

        <p className="text-center mt-6">
          made by{" "}
          <a
            href="https://github.com/sdtyrttpn"
            className="hover:text-yellow-400 transition font-semibold underline"
            target="_blank"
          >
            sdtyrttpn
          </a>
        </p>
      </div>
    </div>
  );
}
