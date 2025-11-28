import api_key from "./API_KEY.js";
import noPoster from "../assets/img/no-poster.webp";

export async function ContentList(link) {
  const genreMap = {
    14: "Fantasy",
    16: "Animation",
    18: "Drama",
    27: "Horror",
    28: "Action",
    35: "Comedy",
    36: "History",
    37: "Western",
    53: "Thriller",
    80: "Crime",
    99: "Documentary",
    878: "Sci-Fi",
    9648: "Mystery",
    10402: "Music",
    10749: "Romance",
    10751: "Family",
    10759: "Action & Adventure",
    10762: "Kids",
    10763: "News",
    10764: "Reality",
    10765: "Sci-Fi & Fantasy",
    10766: "Soap",
    10767: "Talk",
    10768: "War & Politics",
    10770: "TV Movie",
    10752: "War",
  };

  function isAwardShow(c) {
    const text = (c.title || c.name || "").toLowerCase();
    const awardKeywords = [
      "golden globe",
      "emmy",
      "oscar",
      "bafta",
      "sag awards",
      "critics choice",
      "academy awards",
    ];

    return awardKeywords.some((k) => text.includes(k));
  }

  // popularity score
  function getScore(c) {
    const popularity = c.popularity ?? 0;
    const rating = c.vote_average ?? 0;

    const year =
      parseInt((c.release_date || c.first_air_date || "1900-01-01").slice(0, 4), 10) || 1900;

    const order = typeof c.order === "number" ? c.order : 10;

    return popularity * 2 + rating * 1.5 + year * 0.01 + (10 - order);
  }

  function getPriority(c) {
    const g = c.genre_ids || [];
    const lowPriorityGenres = [10767, 10764, 10763]; // talk, reality, news
    const hasLowPriorityGenre = g.some((id) => lowPriorityGenres.includes(id));
    const award = isAwardShow(c);

    if (award) return 2;
    if (hasLowPriorityGenre) return 1;
    return 0;
  }

  try {
    const response = await fetch(`${link}&api_key=${api_key}&language=en-US&region=US`);

    const data = await response.json();

    const cast = Array.isArray(data.cast) ? data.cast : [];

    const filtered = cast.filter((item) => item.media_type === "movie" || item.media_type === "tv");

    const seen = new Set();
    const unique = [];

    for (const item of filtered) {
      if (!seen.has(item.id)) {
        seen.add(item.id);
        unique.push(item);
      }
    }

    const sorted = unique.sort((a, b) => {
      const prioA = getPriority(a);
      const prioB = getPriority(b);

      if (prioA !== prioB) {
        return prioA - prioB;
      }

      return getScore(b) - getScore(a);
    });

    const formatted = sorted.map((c) => {
      const mediaType = c.media_type === "movie" ? "movie" : "tv-show";

      return {
        id: c.id,
        image: c.poster_path ? `https://image.tmdb.org/t/p/w500${c.poster_path}` : noPoster,
        title: c.title || c.name || "Unknown",
        rating:
          !c.vote_average || c.vote_average === 0 ? "N/A" : `${c.vote_average.toFixed(1)} / 10`,
        category: (c.genre_ids || []).slice(0, 2).map((id) => genreMap[id] || "Unknown"),
        year: c.release_date?.slice(0, 4) || c.first_air_date?.slice(0, 4) || "Unknown",
        mediaType, // burada artık sadece "movie" veya "tv-show"
      };
    });

    return formatted;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
}
