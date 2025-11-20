import api_key from "./API_KEY.js";

export async function contentApiTvShows(link, sliceNumber) {
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
    const response = await fetch(`${link}&api_key=${api_key}`);

    const data = await response.json();
    const content = data.results.slice(0, sliceNumber);

    const formatted = content.map((c) => ({
      image: `https://image.tmdb.org/t/p/w500${c.poster_path}`,
      title: c.name,
      rating: c.vote_average === 0 ? "N/A" : `${c.vote_average.toFixed(1)} / 10`,
      category: c.genre_ids.slice(0, 2).map((id) => genreMap[id] || "Unknown"),
      year: c.first_air_date?.slice(0, 4) || "Unknown",
      summary: c.overview || "No summary available.",
      cast: ["Tom Cruise", "Actor 2", "Actor 3"],
    }));

    return formatted;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
}
