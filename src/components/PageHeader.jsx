export default function PageHeader({ title }) {
  return (
    <section
      id="header"
      className="bg-yellow-400 h-[200px] w-full flex items-center justify-center"
    >
      <h2 className="font-extrabold uppercase tracking-wider text-4xl sm:text-5xl md:text-7xl">
        {title}
      </h2>
    </section>
  );
}
