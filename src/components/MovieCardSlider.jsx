import MovieAndTvShowCard from "./MovieAndTvShowCard";
import { MovieList } from "../APIs/contentApiMovieList";
import { useState, useEffect, useRef } from "react";

export default function MovieCardSlider({ type, id, bg }) {
  const [movies, setMovies] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    let link = "";
    if (type === "trending") {
      link = "https://api.themoviedb.org/3/trending/movie/week?";
    } else if (type === "upcoming") {
      link = "https://api.themoviedb.org/3/movie/upcoming?";
    } else if (type === "top rated") {
      link = "https://api.themoviedb.org/3/movie/top_rated?";
    } else if (type === "now playing") {
      link = "https://api.themoviedb.org/3/movie/now_playing?";
    } else if (type === "similar") {
      link = `https://api.themoviedb.org/3/movie/${id}/similar?`;
    } else if (type === "known") {
      link = `https://api.themoviedb.org/3/person/${id}/movie_credits?`;
    }

    if (!link) return;

    async function getMovies() {
      const data = await MovieList(link, 1);
      setMovies(data);
    }

    getMovies();
  }, [type, id]);

  function moveRight() {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft += 300;
  }

  function moveLeft() {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft -= 300;
  }

  if (movies.length === 0) {
    return null;
  }

  return (
    <div className={`px-8 py-6 ${bg === "yes" ? "bg-gray-800" : ""}`}>
      <div className="container mx-auto">
        <h2 className="text-start font-bold text-5xl mb-12 text-yellow-400 uppercase tracking-widest ">
          {type} <span className="text-slate-100">Movies</span>
        </h2>

        <div className="relative">
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4 hide-scrollbar"
          >
            {movies.map((movie) => (
              <MovieAndTvShowCard key={movie.id} contentObj={movie} />
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
