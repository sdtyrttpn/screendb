import api_key from "./API_KEY.js";

export async function contentApi(link, sliceNumber) {
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
    const response = await fetch(`${link}&api_key=${api_key}`);

    const data = await response.json();
    const content = data.results.slice(0, sliceNumber);

    const formatted = content.map((c) => ({
      image: `https://image.tmdb.org/t/p/w500${c.poster_path}`,
      title: c.title,
      rating: c.vote_average === 0 ? "N/A" : `${c.vote_average.toFixed(1)} / 10`,
      category: c.genre_ids.slice(0, 2).map((id) => genreMap[id] || "Unknown"),
      year: c.release_date?.slice(0, 4) || "Unknown",
      summary: c.overview || "No summary available.",
      cast: ["Tom Cruise", "Actor 2", "Actor 3"],
    }));

    return formatted;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
}
