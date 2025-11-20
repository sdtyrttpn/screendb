import { useEffect, useState } from "react";
import { contentApiTvShows } from "../contentApiTvShows";

import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import MovieCardHorizontal from "../components/MovieCardHorizontal";
import Footer from "../components/Footer";

export default function TvShowsTopRatedPage() {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    async function getTvShowsTopRated() {
      const link = "https://api.themoviedb.org/3/tv/top_rated?";
      const data = await contentApiTvShows(link, 20);
      setTvShows(data);
    }
    getTvShowsTopRated();
  }, []);
  return (
    <>
      <Navbar />
      <PageHeader
        title={
          <div className="text-center">
            <span className="text-yellow-400">Tv Shows</span>
            <br />
            Top Rated
          </div>
        }
      />
      <div className="container mx-auto p-4">
        <div className="flex flex-col border-gray-600 border rounded-md max-w-[1000px] p-2 sm:p-6">
          {tvShows.map((tvShow, index) => (
            <MovieCardHorizontal key={index} number={index + 1} movieObj={tvShow} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
