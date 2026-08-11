const Skills = () => {
  return (
    <section id="skills" className="bg-white text-slate-900 py-14">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="skill-item card-hover rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <p className="text-sm uppercase tracking-wide text-slate-500">
              Frontend
            </p>
            <ul className="mt-3 text-slate-700 space-y-2">
              <li>HTML, CSS, JavaScript</li>
              <li>React, Tailwind CSS</li>
            </ul>
          </div>
          <div className="skill-item card-hover rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <p className="text-sm uppercase tracking-wide text-slate-500">
              Backend
            </p>
            <ul className="mt-3 text-slate-700 space-y-2">
              <li>Node.js, Express</li>
              <li>REST APIs, Authentication</li>
              <li>Server-side validation</li>
            </ul>
          </div>
          <div className="skill-item card-hover rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <p className="text-sm uppercase tracking-wide text-slate-500">
              Tools & Practices
            </p>
            <ul className="mt-3 text-slate-700 space-y-2">
              <li>Git, GitHub, Postman</li>
              <li>MongoDB, SQL</li>
              <li>Responsive design, Testing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
