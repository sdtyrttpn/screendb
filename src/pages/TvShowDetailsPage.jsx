import { useParams } from "react-router-dom";
import TvShowDetails from "../components/TvShowDetails";

export default function MovieDetailsPage() {
  const { tv_id } = useParams();

  return (
    <>
      <TvShowDetails tv_id={tv_id} />
    </>
  );
}
