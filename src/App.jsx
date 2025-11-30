import Home from "./pages/Home";

import MoviesNowPlayingPage from "./pages/MoviesNowPlayingPage";
import MoviesTopRatedPage from "./pages/MoviesTopRatedPage";
import MoviesTrendingPage from "./pages/MoviesTrendingPage";

import TvShowsNowPlayingPage from "./pages/TvShowsNowPlayingPage";
import TvShowsTopRatedPage from "./pages/TvShowsTopRatedPage";
import TvShowsTrendingPage from "./pages/TvShowsTrendingPage";

import MovieDetailsPage from "./pages/MovieDetailsPage";
import TvShowDetailsPage from "./pages/TvShowDetailsPage";
import PersonDetailsPage from "./pages/PersonDetailsPage";

import WatchListPage from "./pages/WatchListPage";
import ProfilePage from "./pages/ProfilePage";
import SearchResultPage from "./pages/SearchResultsPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import { WatchlistProvider } from "./components/contexts/WatchlistContext";
import NotFoundPage from "./pages/NotFoundPage";

const routes = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },

      { path: "/movies-trending", element: <MoviesTrendingPage /> },
      { path: "/movies-now-playing", element: <MoviesNowPlayingPage /> },
      { path: "/movies-top-rated", element: <MoviesTopRatedPage /> },

      { path: "/tv-shows-trending", element: <TvShowsTrendingPage /> },
      { path: "/tv-shows-now-playing", element: <TvShowsNowPlayingPage /> },
      { path: "/tv-shows-top-rated", element: <TvShowsTopRatedPage /> },

      { path: "/watchlist", element: <WatchListPage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/movie/:movie_id", element: <MovieDetailsPage /> },
      { path: "/tv-show/:tv_id", element: <TvShowDetailsPage /> },
      { path: "/person/:person_id", element: <PersonDetailsPage /> },
      { path: "/search-results/:query", element: <SearchResultPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default function App() {
  return (
    <WatchlistProvider>
      <RouterProvider router={routes} />
    </WatchlistProvider>
  );
}
