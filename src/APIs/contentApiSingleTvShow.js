import api_key from "./API_KEY.js";
import noPersonImage from "../assets/img/NoPersonImage.webp";
import noPoster from "../assets/img/no-poster.webp";
import noBackdrop from "../assets/img/no-backdrop.webp";

export async function SingleTvShow(tv_id) {
  try {
    const detailsRes = await fetch(
      `https://api.themoviedb.org/3/tv/${tv_id}?language=en-US&api_key=${api_key}`
    );
    const details = await detailsRes.json();

    const creditsRes = await fetch(
      `https://api.themoviedb.org/3/tv/${tv_id}/credits?language=en-US&api_key=${api_key}`
    );

    const credits = await creditsRes.json();

    const createdBy = details.created_by?.map((p) => p.name) || [];

    // cast
    const cast = credits.cast.slice(0, 12).map((person) => ({
      id: person.id,
      name: person.name,
      character: person.character,
      image: person.profile_path
        ? `https://media.themoviedb.org/t/p/w138_and_h175_face${person.profile_path}`
        : noPersonImage,
    }));

    return {
      id: details.id,

      title: details.name,

      tagline: details.tagline || "",

      overview: details.overview || "No overview available.",

      category: details.genres.map((g) => g.name) || [],

      image: details.poster_path
        ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
        : noPoster,

      backdrop: `https://image.tmdb.org/t/p/original${details.backdrop_path}` || noBackdrop,

      createdBy: createdBy.join(", ") || "Unknown",

      date: details.first_air_date
        ? (() => {
            const [y, m, d] = details.first_air_date.split("-");
            return `${m}/${d}/${y}`;
          })()
        : "Unknown",

      year: details.first_air_date.slice(0, 4) || "Unknown",

      seasonCount: details.number_of_seasons || "N/A",

      episodesCount: details.number_of_episodes || "N/A",

      rating: details.vote_average === 0 ? "N/A" : `${details.vote_average.toFixed(1)} / 10`,

      status: details.status || "Unknown",

      cast,

      type: "tv-show",
    };
  } catch (error) {
    console.error("API Error (TV):", error);
    return null;
  }
}
