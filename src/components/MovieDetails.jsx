import { useEffect, useState } from "react";
import { SingleMovie } from "../APIs/contentApiSingleMovie.js";
import CastSlider from "./PersonCardSliderForContentDetail.jsx";
import MovieCardSlider from "./MovieCardSlider.jsx";
import Loader from "./Loader.jsx";
import { useWatchlist } from "./contexts/WatchlistContext";

export default function MovieDetails({ movie_id }) {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();

  useEffect(() => {
    async function getMovieDetails() {
      const data = await SingleMovie(movie_id);
      setMovie(data);
      setLoading(false);
    }
    getMovieDetails();
  }, [movie_id]);

  if (loading) {
    return <Loader />;
  }

  const check = isInWatchlist(movie.id, movie.type);

  function toggleWatchlist() {
    if (check) {
      removeFromWatchlist(movie.id, movie.type);
    } else {
      addToWatchlist(movie);
    }
  }

  return (
    <div>
      <section
        className="relative bg-black/70"
        style={{
          backgroundImage: `url(${movie.backdrop})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="bg-black/70">
          <div
            className="container mx-auto flex flex-col gap-8 items-center p-8
                      
                     lg:flex-row lg:items-start lg:py-16 lg:gap-12"
          >
            {/* movie poster */}
            <img
              src={movie.image}
              alt={movie.title}
              className="rounded-lg border-4 border-slate-100 h-[400px]"
            />

            {/* content */}
            <div className="flex flex-col gap-8 items-start lg:gap-6">
              {/* title,year and tagline */}
              <div className="flex flex-col gap-0">
                <h1 className="text-4xl font-bold">
                  {movie.title}{" "}
                  <span className="text-2xl font-medium text-gray-300">({movie.year})</span>
                </h1>
                <p className="text-lg italic text-gray-300">{movie.tagline}</p>
              </div>

              {/* date, categorys and runtime */}
              <div className="flex flex-col gap-1 text-gray-300 lg:flex-row lg:gap-4">
                <span>{movie.date}</span> <span className="hidden lg:inline-block">•</span>
                <span>{movie.category ? movie.category.slice(0, 2).join("/") : ""}</span>{" "}
                <span className="hidden lg:inline-block">•</span> <span>{movie.runtime}</span>
              </div>

              {/* rating */}
              <span className="text-yellow-400 font-semibold text-xl">
                <i className="fa-solid fa-star"></i> {movie.rating}
              </span>

              {/* add to watchlist */}
              <span
                className="flex items-center text-xl gap-2 font-semibold"
                onClick={toggleWatchlist}
              >
                <i
                  className={`fa-solid fa-bookmark text-2xl cursor-pointer transition hover:text-yellow-400 ${
                    check ? "text-yellow-400" : ""
                  }`}
                ></i>{" "}
                Add to Watchlist
              </span>

              {/* overview */}
              <div>
                <h2 className="text-xl font-semibold">Overview</h2>
                <p className="text-gray-300">{movie.overview}</p>
              </div>

              {/* director and writers */}
              <div className="flex flex-col items-start gap-2 lg:flex-row lg:gap-16">
                <span className="flex flex-col">
                  <span className="text-sm text-gray-300">Director</span>
                  <span className="font-semibold">{movie.director}</span>
                </span>

                <span className="flex flex-col">
                  <span className="text-sm text-gray-300">Writers</span>
                  <span className="font-semibold">{movie.writers}</span>
                </span>

                {(movie.budget !== "N/A" || movie.revenue !== "N/A") && (
                  <>
                    <span className="hidden lg:inline-block lg:self-center">•</span>

                    <span className="flex flex-col">
                      <span className="text-sm text-gray-300">Budget</span>
                      <span className="font-semibold">{movie.budget}</span>
                    </span>

                    <span className="flex flex-col">
                      <span className="text-sm text-gray-300">Revenue</span>
                      <span className="font-semibold">{movie.revenue}</span>
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* cast slider */}
      <section>
        <div className="container mx-auto">
          <CastSlider cast={movie.cast} />
        </div>
      </section>

      {/* similar movies */}
      <MovieCardSlider type={"similar"} id={movie_id} />
    </div>
  );
}
