import { useParams } from "react-router-dom";
import PersonDetails from "../components/PersonDetails";

export default function PersonDetailsPage() {
  const { person_id } = useParams();

  return (
    <>
      <PersonDetails person_id={person_id} />
    </>
  );
}
