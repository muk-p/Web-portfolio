const About = () => {
  return (
    <section id="about" className="bg-white text-slate-900 py-14">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">A little about me</h2>
        <p className="mt-4 text-slate-600 max-w-3xl leading-relaxed">
          I’m John, a web developer who likes making helpful, easy-to-use websites and apps.
          I enjoy taking an idea and turning it into something people can use.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="card-hover rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
            <p className="text-sm uppercase tracking-wide text-slate-500">
              What I do
            </p>
            <p className="mt-2 text-slate-700">
              Build websites, apps, and the features that make them work.
            </p>
          </div>
          <div className="card-hover rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
            <p className="text-sm uppercase tracking-wide text-slate-500">
              How I work
            </p>
            <p className="mt-2 text-slate-700">
              I keep things clear, solve problems, and work well with others.
            </p>
          </div>
          <div className="card-hover rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
            <p className="text-sm uppercase tracking-wide text-slate-500">
              Tools I use
            </p>
            <p className="mt-2 text-slate-700">
              JavaScript, React, Node.js, Git.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
