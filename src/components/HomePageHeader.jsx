export default function Header() {
  return (
    <section
      id="header"
      className="bg-yellow-400 h-[400px] w-full flex items-center justify-center flex-col gap-8"
    >
      <h2 className="font-extrabold text-5xl tracking-wide md:text-7xl ">Welcome</h2>
      <input
        type="text"
        placeholder="Search for a movie"
        className="bg-gray-700 w-10/12 p-4 px-6 lg:max-w-[50%] rounded-4xl text-xl"
      />
    </section>
  );
}
