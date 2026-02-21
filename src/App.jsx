import React from "react";
import { useRef } from "react";
import Header from "./components/Header";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FallingDivs from "./Components/falling";

function App() {
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <FallingDivs />
      <Header
        scrollToHome={() => scrollTo(homeRef)}
        scrollToProject={() => scrollTo(projectRef)}
        scrollToServices={() => scrollTo(servicesRef)}
        scrollToAbout={() => scrollTo(aboutRef)}
        scrollToContact={() => scrollTo(contactRef)}
      />

      <section ref={homeRef} className="min-h-screen pt-24">
        <Home />
      </section>

      <section ref={projectRef} className="min-h-screen pt-24">
        <Projects />
      </section>

      <section ref={servicesRef} className="min-h-screen pt-24">
        <Services />
      </section>

      <section ref={aboutRef} className="min-h-screen pt-24">
        <About />
      </section>

      <section ref={contactRef} className="min-h-screen pt-24">
        <Contact />
      </section>

      
    </>
  );
}

export default App;
