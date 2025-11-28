import { useEffect, useState } from "react";
import { MovieList } from "../APIs/contentApiMovieList";

import PageHeader from "../components/HeaderForPages";
import MovieAndTvShowCardHorizontal from "../components/MovieAndTvShowCardHorizontal";
import Sidebar from "../components/Sidebar";

export default function MoviesNowPlayingPage() {
  const [movies, setMovies] = useState([]);
  const [page, setpage] = useState(1);

  useEffect(() => {
    async function getMoviesNowPlaying() {
      const link = "https://api.themoviedb.org/3/movie/now_playing?";
      const data = await MovieList(link, page);
      setMovies((prev) => [...prev, ...data]);
    }
    getMoviesNowPlaying();
  }, [page]);

  function nextPage(e) {
    if (page === 4) {
      setpage((prev) => prev + 1);
      e.currentTarget.classList.add("hidden");
    } else {
      setpage((prev) => prev + 1);
    }
  }
  return (
    <>
      <PageHeader
        title={
          <div className="text-center">
            <span className="text-yellow-400">Movies</span>
            <br />
            Now Playing
          </div>
        }
      />
      <div className="container mx-auto">
        <div className="py-4 m-2 flex flex-col items-center gap-6 lg:items-start lg:flex-row lg:m-4">
          <div className="flex flex-col border-gray-600 border rounded-md p-2 lg:p-6 lg:flex-5">
            {movies.map((movie, index) => (
              <MovieAndTvShowCardHorizontal key={index} number={index + 1} contentObj={movie} />
            ))}
            <button
              className="p-2 mt-4 bg-yellow-400 w-full text-neutral-950 font-bold rounded-md cursor-pointer"
              onClick={nextPage}
            >
              Load More
            </button>
          </div>
          <div className="flex items-center w-full flex-1 lg:flex-2 lg:min-w-85 lg:sticky lg:top-25">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
