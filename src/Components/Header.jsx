import profile from "./profile.jpeg";

const Header = () => {
  return (
    <header className="relative bg-gradient-to-br from-sky-50 via-blue-50 to-sky-100 text-slate-900 overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-sky-200 to-transparent rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-200 to-transparent rounded-full blur-3xl opacity-15 animate-pulse" style={{animationDelay: "1s"}}></div>
      </div>

      <div className="relative z-999">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold tracking-widest text-sky-700 uppercase">
              Portfolio
            </div>
            <details className="relative">
              <summary className="cursor-pointer list-none rounded-full border-2 border-sky-300 bg-white px-5 py-2 text-sm font-semibold text-slate-700 shadow-md hover:shadow-lg hover:border-sky-400 hover:bg-sky-50 transition-all duration-300">
                Menu
              </summary>
              <div className="absolute right-0 mt-2 w-52 rounded-xl border border-sky-200 bg-white p-2 shadow-xl">
                <a
                  href="#about"
                  className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-sky-100 hover:text-sky-800 transition-colors duration-200"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-sky-100 hover:text-sky-800 transition-colors duration-200"
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-sky-100 hover:text-sky-800 transition-colors duration-200"
                >
                  Skills
                </a>
                <a
                  href="#credentials"
                  className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-sky-100 hover:text-sky-800 transition-colors duration-200"
                >
                  Credentials
                </a>
                <a
                  href="#contact"
                  className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-sky-100 hover:text-sky-800 transition-colors duration-200"
                >
                  Contact
                </a>
              </div>
            </details>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pb-16 pt-8 flex flex-col md:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="flex-shrink-0 header-profile-container">
            <div className="relative group">
              {/* Animated glow background */}
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-300 via-blue-300 to-sky-300 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              {/* Profile image */}
              <img
                src={profile}
                alt="Profile"
                className="relative w-40 h-40 rounded-full object-cover border-4 border-white shadow-2xl ring-4 ring-sky-200 group-hover:ring-sky-400 transition-all duration-500"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="text-center space-y-3 md:text-left">
            <div className="header-title-container">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-sky-800 to-slate-900 bg-clip-text text-transparent">
                John Mukara
              </h1>
            </div>
            <p className="mt-4 text-xl font-semibold text-sky-700 animate-pulse-slow">
              Full-Stack Web Developer Portfolio
            </p>
            <p className="mt-3 text-slate-600 max-w-xl leading-relaxed">
              React • Node.js • APIs • Databases • Responsive Interfaces
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
