import React, { useState } from "react";

const DEMO_API_URL =
  process.env.REACT_APP_DEMO_API_URL ||
  "https://backend-production-9c30.up.railway.app";
const PIXEL_PLAYS_ORIGIN = "https://www.pixelplays.co.ke";

const projects = [
  {
    title: "Pixel-Plays Online Store",
    summary:
      "An online store where people can browse products, manage a cart, sign in, and check out.",
    methods: ["Online shopping", "Cart", "Account sign-in"],
    impact: "Brings the main steps of shopping together in one place.",
    website: "https://www.pixelplays.co.ke/",
    github: "https://github.com/muk-p/Pixel-Plays",
    },
  {
    title: "Pixel-Plays Task Manager",
    summary:
      "A dashboard for creating tasks, keeping work organized, and tracking what needs to get done.",
    methods: ["Create tasks", "Organize work", "Track progress"],
    impact: "Makes it easier to see and manage work in one place.",
    github: "https://github.com/muk-p/Pixel-Plays/tree/main/src/Components/Manager",
    demo: true,
  },
  {
    title: "My Portfolio",
    summary:
      "A simple, mobile-friendly site to share my projects and make it easy to get in touch.",
    methods: ["Project showcase", "Mobile-friendly", "Contact links"],
    impact: "Puts my work and contact details in one easy-to-browse place.",
    github: "https://github.com/muk-p/Web-portfolio",
  },
];

const Projects = () => {
  const [demoLoading, setDemoLoading] = useState(false);
  const [demoMessage, setDemoMessage] = useState("");

  const openDemoDashboard = async () => {
    setDemoMessage("");
    const dashboardWindow = window.open(PIXEL_PLAYS_ORIGIN, "_blank");

    if (!dashboardWindow) {
      setDemoMessage("Allow pop-ups to open the demo dashboard.");
      return;
    }

    setDemoLoading(true);
    let token;
    let user;
    let receiverReady = false;
    let completed = false;
    let handleHandoffMessage;
    let handoffTimeout;

    const removeHandoffListener = () => {
      window.removeEventListener("message", handleHandoffMessage);
      window.clearTimeout(handoffTimeout);
    };

    const sendDemoSession = () => {
      if (receiverReady && token && user) {
        dashboardWindow.postMessage(
          { type: "portfolio-demo-session", token, user },
          PIXEL_PLAYS_ORIGIN
        );
      }
    };

    handleHandoffMessage = (event) => {
      if (
        event.origin !== PIXEL_PLAYS_ORIGIN ||
        event.source !== dashboardWindow
      ) {
        return;
      }

      if (event.data?.type === "pixelplays-demo-ready") {
        receiverReady = true;
        sendDemoSession();
      } else if (event.data?.type === "pixelplays-demo-session-received") {
        completed = true;
        setDemoMessage("Read-only demo opened in a new tab.");
        setDemoLoading(false);
        removeHandoffListener();
      }
    };

    handoffTimeout = window.setTimeout(() => {
      if (completed) return;
      removeHandoffListener();
      dashboardWindow.close();
      setDemoMessage("Could not connect to the demo dashboard. Please try again.");
      setDemoLoading(false);
    }, 20000);

    window.addEventListener("message", handleHandoffMessage);

    try {
      const response = await fetch(`${DEMO_API_URL}/api/auth/demo-login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const result = await response.json();

      if (
        !response.ok ||
        !result.token ||
        result.user?.role !== "manager" ||
        result.user?.isDemo !== true
      ) {
        throw new Error(result.message || "Could not start the demo session.");
      }

      token = result.token;
      user = result.user;
      sendDemoSession();
    } catch (error) {
      removeHandoffListener();
      dashboardWindow.close();
      setDemoMessage(
        error.message || "Could not start the demo session. Please try again."
      );
      setDemoLoading(false);
    }
  };

  return (
    <section id="projects" className="bg-sky-50 text-slate-900 py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Start with Pixel-Plays, then see a few other things I’ve built.
            </p>
          </div>
          <a
            href="https://github.com/muk-p"
            className="text-sm text-slate-700 underline underline-offset-4"
          >
            More on GitHub
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
              <div className="mt-4 flex flex-wrap gap-2 text-xs" aria-label="What you can do">
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
                {project.impact}
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    Visit website
                  </a>
                )}
                {project.demo && (
                  <button
                    type="button"
                    onClick={openDemoDashboard}
                    disabled={demoLoading}
                    className="inline-block rounded-full border border-sky-300 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-900 hover:bg-sky-100 disabled:cursor-wait disabled:opacity-60"
                  >
                    {demoLoading
                      ? "Opening demo..."
                      : "Explore Manager Dashboard (Demo)"}
                  </button>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-slate-700 underline underline-offset-4"
                >
                  See the code
                </a>
              </div>
              {project.demo && (
                <div aria-live="polite">
                  <p className="mt-3 text-xs text-slate-600">
                    Read-only access. Changes are disabled.
                  </p>
                  {demoMessage && (
                    <p role="status" className="mt-2 text-sm text-rose-700">
                      {demoMessage}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
