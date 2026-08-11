const About = () => {
  return (
    <section id="about" className="bg-white text-slate-900 py-14">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
        <p className="mt-4 text-slate-600 max-w-3xl leading-relaxed">
          I am a full-stack web developer who enjoys turning ideas into
          reliable, user-friendly digital products. I build responsive
          interfaces, practical APIs, and data-driven applications with a
          focus on clean code and thoughtful user experiences.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="card-hover rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
            <p className="text-sm uppercase tracking-wide text-slate-500">
              Focus
            </p>
            <p className="mt-2 text-slate-700">
              Frontend Development, Backend Development, APIs, Databases
            </p>
          </div>
          <div className="card-hover rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
            <p className="text-sm uppercase tracking-wide text-slate-500">
              Strengths
            </p>
            <p className="mt-2 text-slate-700">
              Problem Solving, Clean Code, Collaboration
            </p>
          </div>
          <div className="card-hover rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
            <p className="text-sm uppercase tracking-wide text-slate-500">
              Tools
            </p>
            <p className="mt-2 text-slate-700">
              JavaScript, React, Node.js, Git
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
