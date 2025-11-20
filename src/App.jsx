import Home from "./pages/Home";

import MoviesNowPlayingPage from "./pages/MoviesNowPlayingPage";
import MoviesTopRatedPage from "./pages/MoviesTopRatedPage";
import MoviesTrendingPage from "./pages/MoviesTrendingPage";

import TvShowsNowPlayingPage from "./pages/TvShowsNowPlayingPage";
import TvShowsTopRatedPage from "./pages/TvShowsTopRatedPage";
import TvShowsTrendingPage from "./pages/TvShowsTrendingPage";

import MovieDetailsPage from "./pages/MovieDetailsPage";
import WatchListPage from "./pages/WatchListPage";
import ProfilePage from "./pages/ProfilePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  { path: "/", element: <Home /> },

  { path: "/movies-trending", element: <MoviesTrendingPage /> },
  { path: "/movies-now-playing", element: <MoviesNowPlayingPage /> },
  { path: "/movies-top-rated", element: <MoviesTopRatedPage /> },

  { path: "/tv-shows-trending", element: <TvShowsTrendingPage /> },
  { path: "/tv-shows-now-playing", element: <TvShowsNowPlayingPage /> },
  { path: "/tv-shows-top-rated", element: <TvShowsTopRatedPage /> },

  { path: "/watchlist", element: <WatchListPage /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/movie/:id", element: <MovieDetailsPage /> },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
