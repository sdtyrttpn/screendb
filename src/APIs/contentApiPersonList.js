import api_key from "./API_KEY.js";
import noPersonImage from "../assets/img/NoPersonImage.webp";

export async function PersonList(query) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&api_key=${api_key}&language=en-US&region=US&page=1`
    );

    const data = await response.json();
    const content = data.results;

    const formatted = content.map((person) => ({
      id: person.id,
      image: person.profile_path
        ? `https://media.themoviedb.org/t/p/w138_and_h175_face${person.profile_path}`
        : noPersonImage,
      name: person.name ? person.name : "Unknown",
      knownFor: person.known_for_department ? person.known_for_department : "",
    }));

    return formatted;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
}
