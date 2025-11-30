import { useEffect, useState } from "react";
import { SingleTvShow } from "../APIs/contentApiSingleTvShow.js";
import CastSlider from "./PersonCardSliderForContentDetail.jsx";
import TvShowCardSlider from "./TvShowCardSlider.jsx";
import Loader from "./Loader.jsx";
import { useWatchlist } from "./contexts/WatchlistContext";

export default function TvShowDetails({ tv_id }) {
  const [tvShow, setTvShow] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();

  useEffect(() => {
    async function getTvShowDetails() {
      const data = await SingleTvShow(tv_id);
      setTvShow(data);
      setLoading(false);
    }
    getTvShowDetails();
  }, [tv_id]);

  if (loading) {
    return <Loader />;
  }

  const check = isInWatchlist(tvShow.id, tvShow.type);

  function toggleWatchlist() {
    if (check) {
      removeFromWatchlist(tvShow.id, tvShow.type);
    } else {
      addToWatchlist(tvShow);
    }
  }

  return (
    <div>
      <section
        className="relative bg-black/70"
        style={{
          backgroundImage: `url(${tvShow.backdrop})`,
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
              src={tvShow.image}
              alt={tvShow.title}
              className="rounded-lg border-4 border-slate-100 h-[400px]"
            />

            {/* content */}
            <div className="flex flex-col gap-8 items-start lg:gap-6">
              {/* title,year and tagline */}
              <div className="flex flex-col gap-0">
                <h1 className="text-4xl font-bold">
                  {tvShow.title}{" "}
                  <span className="text-2xl font-medium text-gray-300">({tvShow.year})</span>
                </h1>
                <p className="text-lg italic text-gray-300">{tvShow.tagline}</p>
              </div>

              {/* date, categories and runtime */}
              <div className="flex flex-col gap-1 text-gray-300 lg:flex-row lg:gap-4">
                <span>{tvShow.category ? tvShow.category.slice(0, 2).join(", ") : ""}</span>{" "}
                <span className="hidden lg:inline-block">•</span>{" "}
                <span>
                  {`${tvShow.seasonCount} ${tvShow.seasonCount === 1 ? "Season" : "Seasons"}`} /{" "}
                  {`${tvShow.episodesCount} ${tvShow.episodesCount === 1 ? "Episode" : "Episodes"}`}
                </span>
              </div>

              {/* rating */}
              <span className="text-yellow-400 font-semibold text-xl">
                <i className="fa-solid fa-star"></i> {tvShow.rating}
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
                <p className="text-gray-300">{tvShow.overview}</p>
              </div>

              {/* director and writers */}
              <div className="flex flex-col items-start gap-2 lg:flex-row lg:gap-16">
                <span className="flex flex-col">
                  <span className="text-sm text-gray-300">Created By</span>
                  <span className="font-semibold">{tvShow.createdBy}</span>
                </span>

                <span className="flex flex-col">
                  <span className="text-sm text-gray-300">Status</span>
                  <span className="font-semibold">{tvShow.status}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* cast slider */}
      <section>
        <div className="container mx-auto">
          <CastSlider cast={tvShow.cast} />
        </div>
      </section>

      {/* similar movies  */}
      <TvShowCardSlider type={"similar"} id={tvShow.id} />
    </div>
  );
}
