const Contact = () => {
  return (
    <section id="contact" className="bg-white text-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl border border-sky-200 bg-sky-50 p-8 md:p-10 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Open to Full-Stack Opportunities
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl">
            I am currently open to full-stack web development opportunities,
            freelance projects, and collaborations. I would love to connect and
            share more about the products I build.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:myjohnmukara@gmail.com"
              className="rounded-full bg-slate-900 text-white px-5 py-2 text-sm font-semibold hover:bg-slate-800"
            >
              Email Me
            </a>
            <a
              href="https://github.com/muk-p"
              className="rounded-full border border-slate-300 px-5 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-slate-400"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/john-mukara-579a9438a/" 
              className="rounded-full border border-slate-300 px-5 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-slate-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
