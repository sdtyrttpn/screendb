import MovieCard from "./MovieCard";

export default function WatchList({}) {
  return (
    <div className="bg-gray-900 p-6">
      <div className="container mx-auto">
        <h2 className="text-center font-bold text-4xl m-10 text-yellow-400 uppercase tracking-widest">
          Watchlist
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6 w-full">
          {watchListData.length > 0 ? (
            watchListData.map((movie, index) => <MovieCard key={index} movieObj={movie} />)
          ) : (
            <p className="text-center text-gray-400 col-span-full">
              No movies in your watchlist yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
