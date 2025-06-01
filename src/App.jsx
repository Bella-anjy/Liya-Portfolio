import "./App.css";
import {
  Navbar,
  Hero,
  About,
  Blog,
  Education,
  Resume,
  Skills,
  Projects,
  Contact,
  Footer,
} from "./components/index";

const App = () => {
  return (
    <>
      <section>
        {/* <h2>Hello Portfolio</h2> */}
        {/* Navbar */}
        <Navbar />
        {/* Navbar */}
        {/* Hero Section */}
        <Hero />
        {/* Hero Section */}
        {/* About Section */}
        <About />
        {/* About Section */}
        {/* Blog Section */}
        <Education />
        {/* Blog Section */}
        {/* Education Section */}
        <Skills />
        {/* Education Section */}
        {/* Resume Section */}
        <Projects />
        {/* Resume Section */}
        {/* Skills Section */}
        <Resume />
        {/* Skills Section */}
        {/* Projects Section */}
        <Blog />
        {/* Projects Section */}
        {/* Contact Section */}
        <Contact />
        {/* Contact Section */}
        {/* Footer Section */}
        <Footer />
        {/* Footer Section */}
      </section>
    </>
  );
};

export default App;
