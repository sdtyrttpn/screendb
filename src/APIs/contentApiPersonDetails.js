import api_key from "./API_KEY.js";
import noPersonImage from "../assets/img/noPersonImage.webp";

export async function PersonDetails(person_id) {
  try {
    // person details
    const response = await fetch(
      `https://api.themoviedb.org/3/person/${person_id}?include_adult=false&api_key=${api_key}&language=en-US`
    );
    const person = await response.json();

    const genderMap = {
      0: "Unknown",
      1: "Female",
      2: "Male",
      3: "Non-binary",
    };

    return {
      id: person.id,

      name: person.name || "Unknown",

      biography: person.biography || "No biography.",

      gender: genderMap[person.gender] || "Unknown",

      knownFor: person.known_for_department || "",

      birthPlace: person.place_of_birth || "Unknown",

      birthday: person.birthday
        ? (() => {
            const [y, m, d] = person.birthday.split("-");
            return `${m}/${d}/${y}`;
          })()
        : "Unknown",

      deathday: person.deathday
        ? (() => {
            const [y, m, d] = person.deathday.split("-");
            return `${m}/${d}/${y}`;
          })()
        : null,

      image: person.profile_path
        ? `https://image.tmdb.org/t/p/w300${person.profile_path}`
        : noPersonImage,
    };
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
}
