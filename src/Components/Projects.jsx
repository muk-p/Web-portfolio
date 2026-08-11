import React, { useState, useEffect } from "react";
import projectimg from "../images/01_EDA_Frequency_Distributions.png";

const projects = [
  {
    title: "Task Management Dashboard",
    summary:
      "Built a responsive dashboard for creating, organizing, and tracking tasks across projects.",
    methods: ["React", "Tailwind CSS", "REST API"],
    impact: "Created a clear workflow for managing work from one place.",
    github: "https://github.com/muk-p",
    results: {ImageCaption: "Task management dashboard interface."},
    },
  {
    title: "Full-Stack E-Commerce Platform",
    summary:
      "Developed an online store with product browsing, cart management, authentication, and checkout flows.",
    methods: ["Node.js", "Express", "MongoDB"],
    impact: "Connected the customer experience to a structured backend API.",
    github: "https://github.com/muk-p",
    results: {ImageCaption: "E-commerce application interface."},
  },
  {
    title: "Developer Portfolio Website",
    summary:
      "Designed and built a responsive portfolio to present projects, technical skills, and professional experience.",
    methods: ["React", "JavaScript", "Responsive Design"],
    impact: "Made technical work easy to explore across desktop and mobile.",
    github: "https://github.com/muk-p",
    results: {ImageCaption: "Responsive developer portfolio interface."},
  },
];

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalCaption, setModalCaption] = useState("");

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow || "";
    };
  }, [modalOpen]);

  const openModal = (image, caption) => {
    setModalImage(image || projectimg);
    setModalCaption(caption || "");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
    setModalCaption("");
  };

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
              <div className="mt-4 inline-flex items-end justify-between gap-x-24">
                <a
                  href={project.github}
                  className="mt-4 inline-block text-sm text-slate-700 underline underline-offset-4"
                >
                  GitHub repo
                </a>

                <button
                  onClick={() => openModal(projectimg , project.results?.ImageCaption)}
                  className="mt-4 inline-block text-sm text-slate-700 underline underline-offset-4"
                >
                  View some results
                </button>
              </div>
            </div>
          ))}
        </div>
        {modalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
            role="dialog"
            aria-modal="true"
            onClick={closeModal}
          >
            <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeModal}
                aria-label="Close image"
                className="absolute -top-4 -right-4 rounded-full bg-white text-slate-800 shadow p-2"
              >
                ✕
              </button>
              <div className="rounded-lg overflow-hidden bg-white p-4">
                <img
                  src={modalImage || projectimg}
                  alt={modalCaption}
                  className="w-full h-96 object-contain"
                />
                {modalCaption && <p className="mt-2 text-sm text-slate-700 text-center">{modalCaption}</p>}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
