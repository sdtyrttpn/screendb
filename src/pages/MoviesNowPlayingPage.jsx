import { useEffect, useState } from "react";
import { contentApi } from "../contentApiMovies";

import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import MovieCardHorizontal from "../components/MovieCardHorizontal";
import Footer from "../components/Footer";

export default function MoviesNowPlayingPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMoviesNowPlaying() {
      const link = "https://api.themoviedb.org/3/movie/now_playing?";
      const data = await contentApi(link, 20);
      setMovies(data);
    }
    getMoviesNowPlaying();
  }, []);
  return (
    <>
      <Navbar />
      <PageHeader
        title={
          <div className="text-center">
            <span className="text-yellow-400">Movies</span>
            <br />
            Now Playing
          </div>
        }
      />
      <div className="container mx-auto p-4">
        <div className="flex flex-col border-gray-600 border rounded-md max-w-[1000px] p-2 sm:p-6">
          {movies.map((movie, index) => (
            <MovieCardHorizontal key={index} number={index + 1} movieObj={movie} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
