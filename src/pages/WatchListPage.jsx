import PageHeader from "../components/HeaderForPages";
import MovieAndTvShowCard from "../components/MovieAndTvShowCard";
import { useWatchlist } from "../components/contexts/WatchlistContext";

export default function WatchListPage() {
  const { watchlist } = useWatchlist();

  return (
    <>
      <PageHeader
        title={
          <span>
            <span className="text-yellow-400">My</span> Watchlist
          </span>
        }
      />

      <div className="container mx-auto p-4">
        {watchlist.length === 0 ? (
          <div className="text-center text-gray-300 py-16">
            Watchlist is empty. <br />
            <span className="text-sm text-gray-400">
              Film veya dizi eklemek için detay sayfasından “Add to Watchlist” kullan.
            </span>
          </div>
        ) : (
          <div className="flex gap-6 flex-wrap justify-center">
            {watchlist.map((item) => (
              <MovieAndTvShowCard key={`${item.mediaType}-${item.id}`} contentObj={item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
