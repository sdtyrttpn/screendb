import { createContext, useContext, useEffect, useState } from "react";

const WatchlistContext = createContext();

export function WatchlistProvider({ children }) {
  const [watchlist, setWatchlist] = useState(() => {
    const save = localStorage.getItem("watchlist");
    return save ? JSON.parse(save) : [];
  });

  function addToWatchlist(item) {
    setWatchlist((prev) => {
      const exists = prev.some((i) => i.id === item.id && i.type === item.type);
      if (exists) return prev;
      return [...prev, item];
    });
  }

  function removeFromWatchlist(id, type) {
    setWatchlist((prev) => prev.filter((i) => !(i.id === id && i.type === type)));
  }

  function isInWatchlist(id, type) {
    return watchlist.some((i) => i.id === id && i.type === type);
  }

  const value = {
    watchlist,
    addToWatchlist,
    removeFromWatchlist,
    isInWatchlist,
  };

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist)), [watchlist];
  });

  return <WatchlistContext.Provider value={value}>{children}</WatchlistContext.Provider>;
}

export function useWatchlist() {
  return useContext(WatchlistContext);
}
