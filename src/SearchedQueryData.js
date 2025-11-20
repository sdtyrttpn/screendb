import api_key from "./API_KEY.js";

export async function SearchedQueryData(query) {
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
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${api_key}`
    );

    const data = await response.json();
    const movies = data.results.slice(0, number);

    const formatted = movies.map((m) => ({
      image: `https://image.tmdb.org/t/p/w500${m.poster_path}`,
      title: m.title,
      rating: m.vote_average === 0 ? "N/A" : `${m.vote_average.toFixed(1)} / 10`,
      category: m.genre_ids.slice(0, 2).map((id) => genreMap[id] || "Unknown"),
      year: m.release_date?.slice(0, 4) || "Unknown",
    }));

    return formatted;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
}
