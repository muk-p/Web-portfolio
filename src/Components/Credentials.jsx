const Credentials = () => {
  return (
    <section id="credentials" className="bg-sky-50 text-slate-900 py-14">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">More about my background</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="card-hover rounded-xl border border-sky-200 bg-white p-5 shadow-sm">
            <p className="text-sm uppercase tracking-wide text-slate-500">
              What I’m learning and building
            </p>
            <ul className="mt-3 text-slate-700 space-y-2">
              <li>Websites and apps from start to finish</li>
              <li>Pages that work well on phones and computers</li>
              <li>How apps save and use information</li>
            </ul>
          </div>
          <div className="card-hover rounded-xl border border-sky-200 bg-white p-5 shadow-sm">
            <p className="text-sm uppercase tracking-wide text-slate-500">
              Education
            </p>
            <ul className="mt-3 text-slate-700 space-y-2">
              <li>University Of Nairobi</li>
              <li>Studying actuarial science</li>
              <li>Building practical web projects alongside my studies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
