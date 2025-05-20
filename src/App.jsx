import "./App.css";
import {
  Navbar,
  Hero,
  Skills,
  Projects,
  Contact,
  Footer,
} from "./components/index";

const App = () => {
  return (
    <>
      <section>
        <h2>Hello Portfolio</h2>
        {/* Navbar */}
        <Navbar />
        {/* Navbar */}
        {/* Hero Section */}
        <Hero />
        {/* Hero Section */}
        {/* Skills Section */}
        <Skills />
        {/* Skills Section */}
        {/* Projects Section */}
        <Projects />
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
