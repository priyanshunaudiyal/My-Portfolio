const projects = [
    {
        title: "Portfolio Website",
        description:
          "Single-page scroll portfolio built with React and Tailwind showcasing projects and contact info.",
        tech: ["React", "Tailwind CSS", "HTML", "CSS"],
        link: "#",
      },
    {
      title: "EV Population Prediction",
      description:
        "Used Python and multiple ML algorithms to predict the ratio of EVs to total vehicles across Indian states.",
      tech: ["Python", "Pandas", "Matplotlib", "Decision Tree", "ML"],
      link: "https://github.com/priyanshunaudiyal/EV-Population-Prediction",
    },
    {
      title: "Southern Restaurant Dashboard",
      description:
        "A Power BI dashboard analyzing menu item sales, location-wise performance, and 3-month rolling trends.",
      tech: ["Power BI", "DAX", "Data Modeling"],
      link: "https://github.com/priyanshunaudiyal/Southern-Restaurant-Dashboard",
    },
    // {
    //   title: "CA Website",
    //   description:
    //     "",
    //   tech: ["React", "Tailwind CSS", "HTML", "CSS"],
    //   link: "https://github.com/priyanshunaudiyal/Southern-Restaurant-Dashboard",
    // },
  ];
  
  const Projects = () => {
    return (
      <section
        id="projects"
        className="py-20 px-6 bg-gray-100 text-center bg-dot-pattern"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-gray-800">Projects</h2>
  
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2 text-xs text-gray-500 mb-4">
                  {project.tech.map((techItem, i) => (
                    <li
                      key={i}
                      className="bg-gray-100 px-2 py-1 rounded shadow-sm"
                    >
                      {techItem}
                    </li>
                  ))}
                </ul>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    View Project →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  