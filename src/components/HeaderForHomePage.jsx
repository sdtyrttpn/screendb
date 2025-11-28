import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePageHeader() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = value.trim();
    if (!query) return;

    navigate(`/search-results/${query}`);
  };

  return (
    <section
      id="header"
      className="bg-yellow-400 min-h-[60vh] w-full flex flex-col items-center justify-center gap-8 text-center px-4"
    >
      <h1 className="font-extrabold text-5xl tracking-wide md:text-7xl">Welcome</h1>

      <form className="w-10/12 lg:max-w-[50%] flex items-center" onSubmit={handleSubmit}>
        <input
          id="search"
          type="text"
          placeholder="Search for a movie"
          className="bg-gray-700 h-[60px] p-4 px-6 w-full rounded-4xl rounded-e-none 
               text-xl outline-none 
               text-white placeholder:text-gray-400"
          value={value}
          onChange={handleChange}
        />

        <button
          type="submit"
          className={`bg-gray-700 h-[60px] rounded-e-4xl inline-flex items-center justify-center px-6 cursor-pointer`}
        >
          <i className="fa-solid fa-magnifying-glass fa-2x"></i>
        </button>
      </form>
    </section>
  );
}
