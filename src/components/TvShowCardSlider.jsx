import MovieAndTvShowCard from "./MovieAndTvShowCard";
import { TvShowList } from "../APIs/contentApiTvShowList";
import { useState, useEffect, useRef } from "react";

export default function TvShowCardSlider({ type, id, bg }) {
  const [tvShows, setTvShows] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    let link = "";
    if (type === "trending") {
      link = "https://api.themoviedb.org/3/tv/popular?";
    } else if (type === "airing today") {
      link = "https://api.themoviedb.org/3/tv/airing_today?";
    } else if (type === "top rated") {
      link = "https://api.themoviedb.org/3/tv/top_rated?";
    } else if (type === "now playing") {
      link = "https://api.themoviedb.org/3/tv/on_the_air?";
    } else if (type === "similar") {
      if (!id) return;
      link = `https://api.themoviedb.org/3/tv/${id}/similar?`;
    }

    if (!link) return;

    async function getTvShows() {
      const data = await TvShowList(link, 1);
      setTvShows(data);
    }

    getTvShows();
  }, [type, id]);

  function moveRight() {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft += 300;
  }

  function moveLeft() {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft -= 300;
  }

  if (tvShows.length === 0) {
    return null;
  }

  return (
    <div className={`px-8 py-6 ${bg === "yes" ? "bg-gray-800" : ""}`}>
      <div className="container mx-auto">
        <h2 className="text-start font-bold text-5xl mb-12 text-yellow-400 uppercase tracking-widest ">
          {type} <span className="text-slate-100">Tv Shows</span>
        </h2>

        <div className="relative">
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4 hide-scrollbar"
          >
            {tvShows.map((tvShow, index) => (
              <MovieAndTvShowCard key={`${tvShow.id}-${index}`} contentObj={tvShow} />
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
