import api_key from "./API_KEY.js";
import noPoster from "../assets/img/no-poster.webp";

export async function TvShowList(link, page) {
  const genreMap = {
    10759: "Action & Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    10762: "Kids",
    9648: "Mystery",
    10763: "News",
    10764: "Reality",
    10765: "Sci-Fi & Fantasy",
    10766: "Soap",
    10767: "Talk",
    10768: "War & Politics",
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
    } else {
      content = data.cast;
    }

    const formatted = content.map((c) => ({
      id: c.id,
      image: c.poster_path ? `https://image.tmdb.org/t/p/w500${c.poster_path}` : noPoster,
      title: c.name,
      rating: c.vote_average === 0 ? "N/A" : `${c.vote_average.toFixed(1)} / 10`,
      category: c.genre_ids.slice(0, 2).map((id) => genreMap[id] || "Unknown"),
      year: c.first_air_date.slice(0, 4) || "Unknown",
      overview: c.overview || "No summary available.",
      type: "tv-show",
    }));

    return formatted;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
}
