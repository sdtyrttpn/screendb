export default function MovieCardHorizontal({ movieObj, number }) {
  return (
    <div className="flex items-center p-2 border-b border-b-gray-600 last:border-b-0 gap-2 sm:p-4">
      {/* Poster */}
      <img
        src={movieObj.image}
        alt={movieObj.title}
        className="max-w-20 sm:max-w-[120px] object-contain rounded-md me-4"
      />

      {/* Content */}
      <div className="flex justify-between items-center p-0 gap-2 h-full w-full">
        {/* title, year, category and rating */}
        <div className="flex flex-col items-start justify-between h-full gap-2 sm:gap-4">
          {/* title */}
          <h2 className="text-base font-bold text-white hover:text-yellow-400 transition sm:text-2xl">
            <a href="">
              {" "}
              {number}. {movieObj.title}{" "}
            </a>
          </h2>
          {/* year and category */}
          <div className="flex gap-2 items-center">
            {" "}
            <span className="text-gray-400 text-sm sm:text-base">{movieObj.year}</span>
            <span className=" text-gray-300 text-xs sm:text-base">
              {movieObj.category?.join(" / ")}
            </span>
          </div>

          {/* rating */}
          <div className="text-sm sm:text-base">
            <i className="fa-solid fa-star text-yellow-400"></i>
            <span className="text-yellow-400 font-semibold"> {movieObj.rating}</span>
          </div>
        </div>
        {/* watchlist icon */}
        <div>
          <i className="fa-solid fa-bookmark text-2xl text-white hover:text-yellow-400 transition cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
}
