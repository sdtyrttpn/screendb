import { Link } from "react-router";

export default function PersonCard({ person }) {
  return (
    <div className="block min-w-[150px] max-w-[150px] bg-gray-800 rounded-md shadow-xl overflow-hidden">
      <Link to={`/person/${person.id}`}>
        <img src={person.image} alt={person.name} className="w-full" />
      </Link>
      <div className="p-2">
        <Link to={`/person/${person.id}`}>
          <h5 className="font-semibold hover:text-yellow-400 transition">
            <a href="">{person.name}</a>
          </h5>
        </Link>
        <p className="text-gray-300 text-sm">{person.knownFor}</p>
      </div>
    </div>
  );
}
