import { useEffect, useState } from "react";
import { contentApi } from "../contentApiMovies";

import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import MovieCardHorizontal from "../components/MovieCardHorizontal";
import Footer from "../components/Footer";

export default function MoviesTrendingPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getTrendingMovies() {
      const link = "https://api.themoviedb.org/3/trending/movie/week?";
      const data = await contentApi(link, 100);
      setMovies(data);
    }
    getTrendingMovies();
  }, []);

  return (
    <>
      <Navbar />
      <PageHeader
        title={
          <div className="text-center">
            <span className="text-yellow-400">Movies</span>
            <br />
            Trending
          </div>
        }
      />
      <div className="container mx-auto p-4">
        <div className="flex flex-col border-gray-600 border rounded-md max-w-[1000px] p-6">
          {movies.map((movie, index) => (
            <MovieCardHorizontal key={index} number={index + 1} movieObj={movie} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
