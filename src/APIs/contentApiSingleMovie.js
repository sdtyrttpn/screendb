import api_key from "./API_KEY.js";
import noPersonImage from "../assets/img/NoPersonImage.webp";
import noPoster from "../assets/img/no-poster.webp";
import noBackdrop from "../assets/img/no-backdrop.webp";

export async function SingleMovie(movie_id) {
  try {
    const detailsRes = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US&api_key=${api_key}`
    );
    const details = await detailsRes.json();

    const creditsRes = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?language=en-US&api_key=${api_key}`
    );
    const credits = await creditsRes.json();

    // director
    const director = credits.crew.find((p) => p.job === "Director");

    // writers
    const writers = credits.crew.filter((p) =>
      ["Screenplay", "Writer", "Story", "Screenwriter", "Written by"].includes(p.job)
    );

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
      title: details.title,
      image: details.poster_path
        ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
        : noPoster,
      rating: details.vote_average === 0 ? "N/A" : `${details.vote_average.toFixed(1)} / 10`,
      category: details.genres ? details.genres?.map((g) => g.name) : [],
      year: details.release_date ? details.release_date?.slice(0, 4) : "Unknown",

      date: details.release_date
        ? (() => {
            const [y, m, d] = details.release_date.split("-");
            return `${m}/${d}/${y}`;
          })()
        : "Unknown",

      overview: details.overview ? details.overview : "No overview available.",
      backdrop: details.backdrop_path
        ? `https://image.tmdb.org/t/p/original${details.backdrop_path}`
        : noBackdrop,

      tagline: details.tagline ? details.tagline : "",
      runtime: details.runtime
        ? `${Math.floor(details.runtime / 60)}h ${details.runtime % 60}m`
        : "N/A",
      budget: details.budget ? `${details.budget.toLocaleString("en-US")}$` : "N/A",
      revenue: details.revenue ? `${details.revenue.toLocaleString("en-US")}$` : "N/A",
      director: director ? director.name : "Unknown",
      writers: writers.length > 0 ? writers.map((p) => p.name).join(", ") : "Unknown",

      cast,
      crew: credits.crew ? credits.crew : [],
      type: "movie",
    };
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
}
