import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./all.min.css";
import { Section } from "lucide-react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Header />
    <MovieList />
  </StrictMode>
);

function MovieList() {
  const movies = [
    {
      image: "1.jpg",
      title: "The Batman",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, consequatur.",
      category: ["Action", "Drama"],
      year: "2021",
      is_active: true,
    },
    {
      image: "2.jpg",
      title: "James Bond: No Time to Die",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, consequatur.",
      category: ["Action", "Drama"],
      year: "2016",
      is_active: true,
    },
    {
      image: "3.jpg",
      title: "Mad Max: Fury Road",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, consequatur.",
      category: ["Action", "Drama"],
      year: "2018",
      is_active: true,
    },
    {
      image: "1.jpg",
      title: "The Batman",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, consequatur.",
      category: ["Action", "Drama"],
      year: "2021",
      is_active: true,
    },
    {
      image: "2.jpg",
      title: "James Bond: No Time to Die",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, consequatur.",
      category: ["Action", "Drama"],
      year: "2016",
      is_active: true,
    },
    {
      image: "3.jpg",
      title: "Mad Max: Fury Road",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, consequatur.",
      category: ["Action", "Drama"],
      year: "2018",
      is_active: true,
    },
    {
      image: "1.jpg",
      title: "The Batman",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, consequatur.",
      category: ["Action", "Drama"],
      year: "2021",
      is_active: true,
    },
    {
      image: "2.jpg",
      title: "James Bond: No Time to Die",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, consequatur.",
      category: ["Action", "Drama"],
      year: "2016",
      is_active: true,
    },
    {
      image: "3.jpg",
      title: "Mad Max: Fury Road",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, consequatur.",
      category: ["Action", "Drama"],
      year: "2018",
      is_active: true,
    },
  ];

  const moviesFiltered = movies.filter((m) => m.is_active);

  return (
    <>
      <h2 className="text-center font-bold text-4xl m-10">Trending</h2>
      <div id="movieList" className="flex m-10 gap-8 container mx-auto flex-wrap justify-center">
        {moviesFiltered.map((m, index) => (
          <Movie key={index} movieObj={m} />
        ))}
      </div>
    </>
  );
}

function Movie(props) {
  return (
    <span className="inline-block movie w-[140px] md:w-[180px] lg:w-[200px] relative">
      <div
        className="border-4 rounded-md hover:border-yellow-400 transition cursor-pointer relative"
        id="card__img"
      >
        <img className="w-full rounded" src={"/img/" + props.movieObj.image} />
        <div
          id="card__info"
          className="font-bold text-center w-full text-xl md:text-2xl  p-4 md:p-6 lg:p-8 absolute transition duration-300 inset-0 flex flex-col items-center justify-between opacity-0 z-10"
        >
          <span>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <br />
            7.2 / 10
          </span>

          <span>
            {props.movieObj.category[0]}
            <br />
            {props.movieObj.category[1]}
          </span>

          <button
            id="card__button"
            className="bg-yellow-400 font-bold py-1 px-2 text-neutral-800 rounded-md text-base md:text-xl cursor-pointer"
          >
            Details
          </button>
        </div>
      </div>
      <h2 className="font-bold truncate cursor-pointer hover:text-yellow-400 transition ms-1">
        <a>{props.movieObj.title}</a>
      </h2>
      <p className="text-gray-300 text-sm ms-1">{props.movieObj.year}</p>
    </span>
  );
}

function Navbar() {
  return (
    <nav className="w-full bg-gray-800 p-4 border-b-2 border-b-gray-700 sticky top-0">
      <div className="container mx-auto">
        <div className="flex gap-8 items-center justify-between">
          <h2 id="logo" className="shrink-0 font-bold m-0 text-4xl">
            <a href="#">
              <i class="fa-solid fa-film "></i> Movie<span className="text-yellow-400">DB</span>
            </a>
          </h2>

          <ul className="flex gap-4 font-medium ms-auto">
            <li className="hover:text-yellow-400 transition">
              <a href="">Home</a>
            </li>
            <li className="hover:text-yellow-400 transition">
              <a href="">Popular</a>
            </li>
            <li className="hover:text-yellow-400 transition">
              <a href="">Now Playing</a>
            </li>
            <li className="hover:text-yellow-400 transition">
              <a href="">Upcoming</a>
            </li>
          </ul>
          <form className="relative">
            <input
              type="text"
              className="bg-neutral-800 py-2 ps-10 pe-4 text-slate-100 rounded-3xl border-gray-700 border-2 focus:border-slate-100"
              placeholder="Search for a movie"
            />
            <button className="absolute left-4 top-0 bottom-0">
              <i class="fa-solid fa-magnifying-glass"></i>
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
      className="bg-amber-200 h-[400px] w-full flex items-center justify-center flex-col gap-8"
    >
      <h2 className="font-extrabold text-7xl">Welcome</h2>
      <input
        type="text"
        placeholder="Search for a movie"
        className="bg-gray-700 w-10/12 p-4 px-6 lg:max-w-[50%] rounded-4xl text-xl"
      />
    </section>
  );
}
