import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();

  const isTrendingMovies = pathname === "/movies-trending";
  const isNowPlayingMovies = pathname === "/movies-now-playing";
  const isTopRatedMovies = pathname === "/movies-top-rated";

  const isTrendingTv = pathname === "/tv-shows-trending";
  const isNowPlayingTv = pathname === "/tv-shows-now-playing";
  const isTopRatedTv = pathname === "/tv-shows-top-rated";

  return (
    <aside className="w-full border border-gray-700 rounded-md bg-gray-800 overflow-hidden">
      <h3 className="text-lg font-bold tracking-wide uppercase bg-yellow-400 text-gray-900 p-3">
        Explore Other Lists
      </h3>

      <div className="p-4 space-y-6">
        {/* movies */}
        <section>
          <h4 className="text-sm font-semibold tracking-wide text-gray-300 uppercase border-b border-gray-700 pb-2 flex items-center gap-2">
            <span className="inline-block w-1 h-4 rounded-full bg-yellow-400" />
            Movies
          </h4>

          <ul className="mt-3 space-y-2 text-sm">
            {!isTrendingMovies && (
              <li>
                <Link
                  to="/movies-trending"
                  className="flex items-center justify-between px-3 py-2 rounded-lg bg-gray-800/70 hover:bg-gray-700 transition group"
                >
                  <span className="font-medium text-gray-100 group-hover:text-yellow-300">
                    Trending Movies
                  </span>
                  <span className="text-xs text-gray-400 group-hover:text-yellow-300">
                    View &raquo;
                  </span>
                </Link>
              </li>
            )}

            {!isNowPlayingMovies && (
              <li>
                <Link
                  to="/movies-now-playing"
                  className="flex items-center justify-between px-3 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700 transition group"
                >
                  <span className="font-medium text-gray-100 group-hover:text-yellow-300">
                    Now Playing Movies
                  </span>
                  <span className="text-xs text-gray-400 group-hover:text-yellow-300">
                    View &raquo;
                  </span>
                </Link>
              </li>
            )}

            {!isTopRatedMovies && (
              <li>
                <Link
                  to="/movies-top-rated"
                  className="flex items-center justify-between px-3 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700 transition group"
                >
                  <span className="font-medium text-gray-100 group-hover:text-yellow-300">
                    Top Rated Movies
                  </span>
                  <span className="text-xs text-gray-400 group-hover:text-yellow-300">
                    View &raquo;
                  </span>
                </Link>
              </li>
            )}
          </ul>
        </section>

        {/* tv shows */}
        <section>
          <h4 className="text-sm font-semibold tracking-wide text-gray-300 uppercase border-b border-gray-700 pb-2 flex items-center gap-2">
            <span className="inline-block w-1 h-4 rounded-full bg-yellow-400" />
            TV Shows
          </h4>

          <ul className="mt-3 space-y-2 text-sm">
            {!isTrendingTv && (
              <li>
                <Link
                  to="/tv-shows-trending"
                  className="flex items-center justify-between px-3 py-2 rounded-lg bg-gray-800/70 hover:bg-gray-700 transition group"
                >
                  <span className="font-medium text-gray-100 group-hover:text-yellow-300">
                    Trending TV Shows
                  </span>
                  <span className="text-xs text-gray-400 group-hover:text-yellow-300">
                    View &raquo;
                  </span>
                </Link>
              </li>
            )}

            {!isNowPlayingTv && (
              <li>
                <Link
                  to="/tv-shows-now-playing"
                  className="flex items-center justify-between px-3 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700 transition group"
                >
                  <span className="font-medium text-gray-100 group-hover:text-yellow-300">
                    Now Playing TV Shows
                  </span>
                  <span className="text-xs text-gray-400 group-hover:text-yellow-300">
                    View &raquo;
                  </span>
                </Link>
              </li>
            )}

            {!isTopRatedTv && (
              <li>
                <Link
                  to="/tv-shows-top-rated"
                  className="flex items-center justify-between px-3 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700 transition group"
                >
                  <span className="font-medium text-gray-100 group-hover:text-yellow-300">
                    Top Rated TV Shows
                  </span>
                  <span className="text-xs text-gray-400 group-hover:text-yellow-300">
                    View &raquo;
                  </span>
                </Link>
              </li>
            )}
          </ul>
        </section>
      </div>
    </aside>
  );
}
