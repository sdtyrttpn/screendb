import { useEffect, useState } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./all.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Header />
    <TrendingList />
  </StrictMode>
);

function TrendingList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=cd13938875ae9c483c97d414349fafbe"
        );

        const data = await response.json();
        const firstSix = data.results.slice(0, 6);

        // API verisini senin Movie card formatına dönüştürüyorum
        const formatted = firstSix.map((m, i) => ({
          image: `https://image.tmdb.org/t/p/w500${m.poster_path}`,
          title: m.title,
          rating: m.vote_average.toFixed(1),
          category: ["Action", "Drama"],
          year: m.release_date?.slice(0, 4) || "Unknown",
        }));

        setMovies(formatted);
      } catch (error) {
        console.error("API Error:", error);
      }
    }

    getMovies();
  }, []);

  return (
    <div className="mx-4">
      <h2 className="text-center font-bold text-4xl m-10 text-yellow-400 uppercase tracking-widest">
        Trending
      </h2>

      <div className="flex m-10 gap-8 container mx-auto flex-wrap justify-center">
        {movies.map((m, index) => (
          <Movie key={index} movieObj={m} />
        ))}
      </div>
    </div>
  );
}

function Movie({ movieObj }) {
  return (
    <span className="inline-block movie w-[140px] md:w-[180px] lg:w-[200px] relative">
      <div className="border-4 rounded-md hover:border-yellow-400 transition cursor-pointer relative">
        <img className="w-full rounded" src={movieObj.image} alt="" />

        <div className="font-bold text-center w-full text-xl md:text-2xl p-4 absolute inset-0 flex flex-col items-center justify-between opacity-0 hover:opacity-100 bg-black/60 duration-300">
          <span>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <br />
            {movieObj.rating} / 10
          </span>

          <span>
            {movieObj.category[0]}
            <br />
            {movieObj.category[1]}
          </span>

          <button className="bg-yellow-400 font-bold py-1 px-2 text-neutral-800 rounded-md text-base md:text-xl">
            Details
          </button>
        </div>
      </div>

      <h2 className="font-bold truncate hover:text-yellow-400 transition ms-1">
        <a href="">{movieObj.title}</a>
      </h2>
      <p className="text-gray-300 text-sm ms-1">{movieObj.year}</p>
    </span>
  );
}

function Navbar() {
  return (
    <nav className="w-full bg-gray-800 p-4 border-b-2 border-b-gray-700 sticky top-0">
      <div className="container mx-auto">
        <div className="flex gap-8 items-center justify-between">
          <h2 className="shrink-0 font-bold text-4xl">
            <a href="#">
              <i className="fa-solid fa-film"></i> Movie
              <span className="text-yellow-400">DB</span>
            </a>
          </h2>

          <ul className="flex gap-4 font-medium ms-auto">
            <li className="hover:text-yellow-400">
              <a>Home</a>
            </li>
            <li className="hover:text-yellow-400">
              <a>Popular</a>
            </li>
            <li className="hover:text-yellow-400">
              <a>Now Playing</a>
            </li>
            <li className="hover:text-yellow-400">
              <a>Upcoming</a>
            </li>
          </ul>

          <form className="relative">
            <input
              type="text"
              className="bg-neutral-800 py-2 ps-10 pe-4 text-slate-100 rounded-3xl border-gray-700 border-2 focus:border-slate-100"
              placeholder="Search for a movie"
            />
            <button className="absolute left-4 top-0 bottom-0">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

function Header() {
  return (
    <section
      id="header"
      className="bg-yellow-400 h-[400px] w-full flex items-center justify-center flex-col gap-8"
    >
      <h2 className="font-extrabold text-4xl md:text-7xl tracking-wide">Welcome</h2>
      <input
        type="text"
        placeholder="Search for a movie"
        className="bg-gray-700 w-10/12 p-4 px-6 lg:max-w-[50%] rounded-4xl text-xl"
      />
    </section>
  );
}
