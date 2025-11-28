import { useEffect, useState } from "react";
import { TvShowList } from "../APIs/contentApiTvShowList";

import PageHeader from "../components/HeaderForPages";
import MovieAndTvShowCardHorizontal from "../components/MovieAndTvShowCardHorizontal";
import Sidebar from "../components/Sidebar";

export default function TvShowsTopRatedPage() {
  const [tvShows, setTvShows] = useState([]);
  const [page, setpage] = useState(1);

  useEffect(() => {
    async function getTvShowsTopRated() {
      const link = "https://api.themoviedb.org/3/tv/top_rated?";
      const data = await TvShowList(link, page);
      setTvShows((prev) => [...prev, ...data]);
    }
    getTvShowsTopRated();
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
            <span className="text-yellow-400">Tv Shows</span>
            <br />
            Top Rated
          </div>
        }
      />
      <div className="container mx-auto">
        <div className="py-4 m-4 flex flex-col items-center lg:items-start lg:flex-row gap-6">
          <div className="flex flex-col border-gray-600 border rounded-md  p-6 lg:flex-5">
            {tvShows.map((tvShow, index) => (
              <MovieAndTvShowCardHorizontal key={index} number={index + 1} contentObj={tvShow} />
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
