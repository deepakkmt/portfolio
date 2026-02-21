import React from "react";
import { useRef } from "react";
import Header from "./components/Header";

import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import FallingDivs from "./components/falling";

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
