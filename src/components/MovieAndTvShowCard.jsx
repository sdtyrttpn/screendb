import { Link } from "react-router-dom";

export default function MovieAndTvShowCard({ contentObj }) {
  return (
    <div className="flex flex-col max-w-40 min-w-40">
      <div className="border-3 rounded-md hover:border-yellow-400 transition cursor-pointer">
        <Link to={`/${contentObj.mediaType}/${contentObj.id}`}>
          <div className="relative">
            {/* poster */}
            <img
              className="aspect-2/3 object-cover object-center rounded"
              src={contentObj.image}
              alt={contentObj.title}
            />

            {/* hover info */}
            <div className="font-bold text-center w-full text-lg p-4 absolute inset-0 flex flex-col items-center justify-between opacity-0 hover:opacity-100 bg-black/60 duration-300">
              <span>
                <i className="fa-solid fa-star text-yellow-400"></i>
                <br />
                {contentObj.rating}
              </span>
              <span>
                {contentObj.category?.[0]}
                <br />
                {contentObj.category?.[1]}
              </span>
              <span>
                <button className="bg-yellow-400 text-base font-semibold py-1 px-2 cursor-pointer transition text-neutral-800 rounded-md">
                  Details
                </button>
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* title,date and watchlist icon */}
      <div className="flex justify-between w-full mt-1 gap-2 items-center">
        <div className="ms-1 min-w-0">
          {/* title */}
          <h2 className="font-bold truncate hover:text-yellow-400 transition">
            <Link to={`/${contentObj.mediaType}/${contentObj.id}`}>{contentObj.title}</Link>
          </h2>
          {/* date */}
          <p className="text-gray-300 text-sm">{contentObj.year}</p>
        </div>
        {/* watchlist icon */}
        <div>
          <i className="fa-solid fa-bookmark text-2xl cursor-pointer transition"></i>
        </div>
      </div>
    </div>
  );
}
