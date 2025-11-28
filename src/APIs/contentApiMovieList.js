import api_key from "./API_KEY.js";
import noPoster from "../assets/img/no-poster.webp";
import noBackdrop from "../assets/img/no-backdrop.webp";

export async function MovieList(link, page) {
  const genreMap = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

  try {
    const response = await fetch(
      `${link}&api_key=${api_key}&language=en-US&region=US&page=${page}`
    );

    const data = await response.json();

    let content = "";
    if (data.results) {
      content = data.results;
    } else if (data.cast) {
      content = data.cast;
    }

    const formatted = content.map((c) => ({
      id: c.id,
      image: c.poster_path ? `https://image.tmdb.org/t/p/w500${c.poster_path}` : noPoster,
      title: c.title,
      rating: c.vote_average === 0 ? "N/A" : `${c.vote_average.toFixed(1)} / 10`,
      category: c.genre_ids.slice(0, 2).map((id) => genreMap[id] || "Unknown"),
      date: c.release_date
        ? (() => {
            const [y, m, d] = c.release_date.split("-");
            return `${m}/${d}/${y}`;
          })()
        : "Unknown",
      year: c.release_date ? c.release_date?.slice(0, 4) : "Unknown",
      overview: c.overview ? c.overview : "No summary available.",
      backDrop: c.backdrop_path ? `https://image.tmdb.org/t/p/w500${c.backdrop_path}` : noBackdrop,
      mediaType: "movie",
    }));

    return formatted;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
}
