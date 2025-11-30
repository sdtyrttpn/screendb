import api_key from "./API_KEY.js";
import noPoster from "../assets/img/no-poster.webp";
import noBackdrop from "../assets/img/no-backdrop.webp";

export async function MovieListContentApi(link) {
  try {
    const response = await fetch(
      `${link}&api_key=${api_key}&include_adult=false&language=en-US&page=1`
    );

    const data = await response.json();
    const content = data.results || [];

    return {
      title: c.name ? c.name : "Unknown",
      id: c.id,
      image: c.poster_path ? `https://image.tmdb.org/t/p/w500${c.poster_path}` : noPoster,
      category: genres,
      date: dateFormatted,
      year: dateRaw ? dateRaw.slice(0, 4) : "Unknown",
      overview: c.overview || "No summary available.",
      backDrop: c.backdrop_path ? `https://image.tmdb.org/t/p/w500${c.backdrop_path}` : noBackdrop,
      type: c.media_type === "movie" ? "movie" : "tv-show",
    };
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
}
