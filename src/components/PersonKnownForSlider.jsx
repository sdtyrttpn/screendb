import MovieAndTvShowCard from "./MovieAndTvShowCard";
import { useState, useEffect, useRef } from "react";
import { ContentList } from "../APIs/contentApiPersonContentList";

export default function PersonKnownForSlider({ id }) {
  const [content, setContent] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    async function getContent() {
      const link = `https://api.themoviedb.org/3/person/${id}/combined_credits?`;
      const data = await ContentList(link);
      setContent(data);
    }

    getContent();
  }, [id]);

  if (content.length === 0) {
    return null;
  }

  function moveRight() {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft += 300;
  }

  function moveLeft() {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft -= 300;
  }

  return (
    <div className="py-6">
      <div className="container mx-auto">
        <h2 className="text-start font-bold text-5xl mb-12 text-yellow-400 uppercase tracking-widest ">
          Known <span className="text-slate-100">For</span>
        </h2>

        <div className="relative">
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4 hide-scrollbar"
          >
            {content.map((c) => (
              <MovieAndTvShowCard key={c.id} contentObj={c} />
            ))}
          </div>

          <span className="absolute top-[-50px] right-2 flex gap-3">
            <span className="cursor-pointer" onClick={moveLeft}>
              <i className="fa-solid fa-circle-chevron-left fa-2x text-yellow-400 "></i>
            </span>

            <span className="cursor-pointer" onClick={moveRight}>
              <i className="fa-solid fa-circle-chevron-right fa-2x text-yellow-400 "></i>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
