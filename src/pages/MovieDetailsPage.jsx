import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";

export default function MovieDetailsPage() {
  const { movie_id } = useParams();

  return (
    <>
      <MovieDetails movie_id={movie_id} />
    </>
  );
}
