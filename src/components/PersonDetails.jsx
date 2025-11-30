import { useEffect, useState, useRef } from "react";
import { PersonDetails } from "../APIs/contentApiPersonDetails";
import PersonKnownForSlider from "./PersonKnownForSlider";
import Loader from "./Loader";

export default function PersonDetailsPage({ person_id }) {
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showReadMore, setShowReadMore] = useState(false);
  const bioRef = useRef(null);

  useEffect(() => {
    async function getPersonDetails() {
      const data = await PersonDetails(person_id);
      setPerson(data);
      setLoading(false);
    }
    getPersonDetails();
  }, [person_id]);

  useEffect(() => {
    if (!person) return;
    const bioEl = bioRef.current;
    if (bioEl) {
      const fullHeight = bioEl.scrollHeight;
      const lineHeight = parseFloat(getComputedStyle(bioEl).lineHeight);
      const maxHeight = lineHeight * 6;
      if (fullHeight > maxHeight) {
        setShowReadMore(true);
      }
    }
  }, [person]);

  if (loading) {
    return <Loader />;
  }

  if (!person) return null;

  return (
    <div>
      <section className="bg-neutral-800/80">
        <div className="container mx-auto py-8 grid grid-cols-4 gap-10">
          {/* person image and infos */}
          <div className="col-span-4 flex flex-col gap-4 items-center text-center mx-8 lg:mx-0 lg:col-span-1 lg:items-start lg:text-start">
            <img
              src={person.image}
              className="rounded-lg border-4 border-slate-100 w-full max-w-120"
            />

            <span className="flex flex-col">
              <span className="text-lg font-bold">Known For</span>
              <span>{person.knownFor}</span>
            </span>

            <span className="flex flex-col">
              <span className="text-lg font-bold">Gender</span>
              <span>{person.gender}</span>
            </span>

            <span className="flex flex-col">
              <span className="text-lg font-bold">Birthday</span>
              <span>{person.birthday}</span>
            </span>

            {person.deathday && (
              <span className="flex flex-col">
                <span className="text-lg font-bold">Deathday</span>
                <span>{person.deathday}</span>
              </span>
            )}

            <span className="flex flex-col">
              <span className="text-lg font-bold">Place of Birth</span>
              <span>{person.birthPlace}</span>
            </span>
          </div>

          {/* content */}
          <div className="col-span-4 flex flex-col gap-8 px-8 items-start lg:gap-6 lg:col-span-3">
            {/* name */}
            <h1 className="text-4xl font-bold">{person.name}</h1>

            {/* biography */}
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold mb-6">Biography</h2>
              <p ref={bioRef} id="person_details-bio" className="text-gray-300 line-clamp-6">
                {person.biography}
              </p>

              {showReadMore && (
                <button
                  className="ms-auto text-yellow-400 mt-2 cursor-pointer hover:underline transition"
                  onClick={(e) => {
                    bioRef.current.classList.remove("line-clamp-6");
                    setShowReadMore(false);
                  }}
                >
                  Read more...
                </button>
              )}
            </div>

            {/* known for slider */}
            <div className="w-full">
              <PersonKnownForSlider id={person.id} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
