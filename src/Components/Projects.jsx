import React from "react";

const projects = [
  {
    title: "Task Management Dashboard",
    summary:
      "Built a responsive dashboard for creating, organizing, and tracking tasks across projects.",
    methods: ["React", "Tailwind CSS", "REST API"],
    impact: "Created a clear workflow for managing work from one place.",
    github: "https://github.com/muk-p/Pixel-Plays/tree/main/src/Components/Manager",
    },
  {
    title: "Full-Stack E-Commerce Platform",
    summary:
      "Developed an online store with product browsing, cart management, authentication, and checkout flows.",
    methods: ["Node.js", "Express", "MYSQL", "REST API"],
    impact: "Connected the customer experience to a structured backend API.",
    github: "https://github.com/muk-p/Pixel-Plays",
  },
  {
    title: "Developer Portfolio Website",
    summary:
      "Designed and built a responsive portfolio to present projects, technical skills, and professional experience.",
    methods: ["React", "JavaScript", "Responsive Design"],
    impact: "Made technical work easy to explore across desktop and mobile.",
    github: "https://github.com/muk-p/Web-portfolio",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-sky-50 text-slate-900 py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              A few highlights showcasing the products I build, the technologies I use, and the problems I solve.
            </p>
          </div>
          <a
            href="https://github.com/muk-p"
            className="text-sm text-slate-700 underline underline-offset-4"
          >
            View GitHub
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="project-card card-hover rounded-xl border border-sky-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 text-slate-600">{project.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {project.methods.map((method) => (
                  <span
                    key={method}
                    className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-slate-700"
                  >
                    {method}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-700">
                Impact: {project.impact}
              </p>
              <a
                href={project.github}
                className="mt-4 inline-block text-sm text-slate-700 underline underline-offset-4"
              >
                GitHub repo
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
