import { useRef } from "react";
import PersonCard from "./PersonCardForContentDetails";

export default function CastSlider({ cast = [] }) {
  const sliderRef = useRef(null);

  function moveRight() {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft += 200;
  }

  function moveLeft() {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft -= 200;
  }

  if (!cast || cast.length === 0) return null;

  return (
    <div className="p-6">
      <div className="container mx-auto">
        <h2 className="text-start font-bold text-5xl my-12 text-yellow-400 uppercase tracking-widest">
          Cast
        </h2>

        <div className="relative">
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4 hide-scrollbar"
          >
            {/* person cards */}
            {cast.map((person, index) => (
              <PersonCard key={index} person={person} />
            ))}
          </div>

          {/* arrows */}
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
