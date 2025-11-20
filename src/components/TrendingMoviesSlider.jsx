import { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { contentApi } from "../contentApiMovies";

export default function TrendingMoviesSlider() {
  const [movies, setMovies] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    async function getTrendingMovies() {
      const link = "https://api.themoviedb.org/3/trending/movie/week?";
      const data = await contentApi(link, 24);
      setMovies(data);
    }
    getTrendingMovies();
  }, []);

  function moveRight() {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft += 300;
  }

  function moveLeft() {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft -= 300;
  }

  return (
    <div className="p-6">
      <div className="container mx-auto">
        <h2 className="text-start font-bold text-5xl my-12 text-yellow-400 uppercase tracking-widest">
          Trending <span className="text-slate-100">Movies</span>
        </h2>

        <div className="relative">
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4 hide-scrollbar"
          >
            {movies.map((movie, index) => (
              <MovieCard key={index} movieObj={movie} />
            ))}
          </div>

          <span className="absolute top-[-50px] right-2 flex gap-3">
            <span className="cursor-pointer" onClick={moveLeft}>
              <i className="fa-solid fa-circle-chevron-left fa-2x text-yellow-400 "></i>
            </span>

            <span className="cursor-pointer" onClick={moveRight}>
              <i className="fa-solid fa-circle-chevron-right fa-2x text-yellow-400 "></i>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
