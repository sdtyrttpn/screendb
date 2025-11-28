import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieList } from "../APIs/contentApiMovieList";
import { TvShowList } from "../APIs/contentApiTvShowList";
import { PersonList } from "../APIs/contentApiPersonList";
import PageHeader from "../components/HeaderForPages";
import MovieAndTvShowCard from "../components/MovieAndTvShowCard";
import PersonCard from "../components/PersonCardForSearchResults";

export default function SearchResultPage() {
  const { query } = useParams();
  const [page, setpage] = useState(1);

  const [movieListData, setMovieListData] = useState([]);
  const [tvShowListData, setTvShowListData] = useState([]);
  const [personListData, setPersonListData] = useState([]);
  const [listType, setListType] = useState("movies");

  useEffect(() => {
    if (!query) return;

    const encodedQuery = encodeURIComponent(query);

    async function getMovieListResults() {
      try {
        const movieDataLink = `https://api.themoviedb.org/3/search/movie?query=${encodedQuery}`;
        const movieListResults = await MovieList(movieDataLink, page);
        setMovieListData(movieListResults);
      } catch (err) {
        console.error("Movie list api error.", err);
        setMovieListData([]);
      }
    }

    async function getTvShowsListResults() {
      try {
        const tvShowDataLink = `https://api.themoviedb.org/3/search/tv?query=${encodedQuery}`;
        const tvShowResults = await TvShowList(tvShowDataLink, page);
        setTvShowListData(tvShowResults);
      } catch (err) {
        console.error("Tv show list api error.", err);
        setTvShowListData([]);
      }
    }

    async function getPersonListResults() {
      try {
        const personResults = await PersonList(encodedQuery, page);
        setPersonListData(personResults);
      } catch (err) {
        console.error("Person list api error.", err);
        setPersonListData([]);
      }
    }

    setListType("movies");

    getMovieListResults();
    getTvShowsListResults();
    getPersonListResults();
  }, [query]);

  const currentContent =
    listType === "movies"
      ? movieListData
      : listType === "tvShows"
      ? tvShowListData
      : personListData;

  return (
    <>
      <PageHeader
        title={
          <div className="text-center">
            <span className="text-yellow-400">Search</span>
            <br />
            Results
          </div>
        }
      />

      <div className="container mx-auto p-4 flex flex-col items-center justify-center lg:flex-row lg:items-start gap-4 lg:justify-between">
        {/* search category */}
        <ul className="bg-gray-700 inline-block rounded-md text-lg text-start w-full min-w-60 max-w-90 overflow-hidden mt-6 lg:sticky top-[100px]">
          <li className="p-2 ps-4 bg-yellow-400 text-gray-950 font-semibold">Search Category</li>

          {/* movies */}
          <li
            className={`p-2 ps-4 hover:bg-gray-800 cursor-pointer transition border-b border-gray-600 ${
              listType === "movies" ? "bg-gray-800" : ""
            }`}
            onClick={() => setListType("movies")}
          >
            Movies
          </li>

          {/* tvShows */}
          <li
            className={`p-2 ps-4 hover:bg-gray-800 cursor-pointer transition border-b border-gray-600 ${
              listType === "tvShows" ? "bg-gray-800" : ""
            }`}
            onClick={() => setListType("tvShows")}
          >
            Tv Shows
          </li>

          {/* person */}
          <li
            className={`p-2 ps-4 hover:bg-gray-800 cursor-pointer transition ${
              listType === "person" ? "bg-gray-800" : ""
            }`}
            onClick={() => setListType("person")}
          >
            Person
          </li>
        </ul>

        {/* content cards */}
        <div className="flex justify-center gap-x-4 gap-y-10 flex-wrap mt-6 lg:me-auto lg:justify-start">
          {currentContent.length === 0 ? (
            <p className="text-gray-400 text-center w-full">No result.</p>
          ) : (
            currentContent.map((c) =>
              listType === "person" ? (
                <PersonCard key={c.id} person={c} />
              ) : (
                <MovieAndTvShowCard key={c.id} contentObj={c} />
              )
            )
          )}
        </div>
      </div>
    </>
  );
}
