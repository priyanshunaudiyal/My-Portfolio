const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-neutral-50"
    >
      <h1 className="text-4xl font-semibold text-gray-800 max-w-lg select-none">
        Hi, I'm Priyanshu — a Frontend Developer crafting elegant, fast, and responsive web experiences.
      </h1>

      <p className="text-gray-500 mt-4 max-w-md select-none">
        Designing engaging user experiences with React, Tailwind, and a touch of creativity. Let's build something impactful.
      </p>

      <a
        href="#about"
        className="text-sm text-gray-400 mt-10 select-none animate-fade-in hover:text-gray-600 transition-colors duration-200"
      >
        ↓ Scroll to explore
      </a>
    </section>
  );
};

export default Home;
