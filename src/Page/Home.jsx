import Header from '../Components/Header';
import About from '../Components/About';
import Projects from '../Components/Projects';
import Skills from '../Components/Skills';
import Credentials from '../Components/Credentials';
import Contact from '../Components/Contact';

function Home() {
    return (
        <div className="home-container bg-white">
            <Header />
            <Projects />
            <About />
            <Skills />
            <Credentials />
            <Contact />
        </div>
    );
}

export default Home;
