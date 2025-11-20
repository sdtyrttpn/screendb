export default function MovieCard({ movieObj }) {
  return (
    <div className="flex flex-col max-w-40 min-w-40">
      {/* Poster ve hover info */}
      <div className="border-3 rounded-md hover:border-yellow-400 transition cursor-pointer">
        <div className="relative">
          <img
            className="w-full h-full object-cover rounded"
            src={movieObj.image}
            alt={movieObj.title}
          />
          <div className="font-bold text-center w-full text-lg p-4 absolute inset-0 flex flex-col items-center justify-between opacity-0 hover:opacity-100 bg-black/60 duration-300">
            <span>
              <i className="fa-solid fa-star text-yellow-400"></i>
              <br />
              {movieObj.rating}
            </span>
            <span>
              {movieObj.category[0]}
              <br />
              {movieObj.category[1]}
            </span>
            <span>
              <button className="bg-yellow-400 text-base font-semibold py-1 px-2 cursor-pointer transition text-neutral-800 rounded-md">
                Details
              </button>
            </span>
          </div>
        </div>
      </div>

      {/* Alt bar */}
      <div className="flex justify-between w-full mt-1 gap-2 items-center">
        <div className="ms-1 min-w-0">
          <h2 className="font-bold truncate hover:text-yellow-400 transition">
            {" "}
            <a href=""> {movieObj.title}</a>
          </h2>
          <p className="text-gray-300 text-sm">{movieObj.year}</p>
        </div>

        <div>
          <i className={`fa-solid fa-bookmark text-2xl cursor-pointer transition `}></i>
        </div>
      </div>
    </div>
  );
}
