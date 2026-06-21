import React, { useState, useEffect } from "react";
import pricingimg from "../images/01_EDA_Frequency_Distributions.png";

const projects = [
  {
    title: "Auto Insurance Pricing Model",
    summary:
      "Built a GLM-based pricing model with feature engineering and model diagnostics.",
    methods: ["GLM", "Feature Engineering", "Lift Charts"],
    impact: "Improved model accuracy by 12% vs baseline.",
    github: "https://github.com/muk-p/auto-pricing-model",
    results: {ImageCaption: "Some results from the auto pricing models."},
    },
  {
    title: "Claims Severity Forecasting",
    summary:
      "Forecasted claim severity using gradient boosting with explainability.",
    methods: ["GBM", "SHAP", "Cross Validation"],
    impact: "Reduced MAE by 9% on holdout.",
    github: "https://github.com/muk-p/claims-severity-forecast",
    results: {ImageCaption: "Results from claims severity forecasting model."},
  },
  {
    title: "Reserving Triangle Automation",
    summary:
      "Automated reserving triangles and reporting outputs from raw claims data.",
    methods: ["Chain Ladder", "Python", "Excel Output"],
    impact: "Cut reporting time from hours to minutes.",
    github: "https://github.com/muk-p/reserving-automation",
    results: {ImageCaption: "Results from reserving automation project."},
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
    setModalImage(image || pricingimg);
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
              A few highlights with results, methods, and links to code.
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
                  onClick={() => openModal(pricingimg , project.results?.ImageCaption)}
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
                  src={modalImage || pricingimg}
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
