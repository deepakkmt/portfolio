import React, { useState } from "react";
import "../App.css";

function Header({
  scrollToHome,
  scrollToProject,
  scrollToServices,
  scrollToAbout,
  scrollToContact,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" fixed w-full z-50 header-main">
      <header className="bg-gray-900">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">

          {/* Logo */}
          <div className="flex lg:flex-1">
            <button onClick={scrollToHome}>
              <img
                src="/src/assets/logo.png"
                alt=""
                className="h-8 w-8 header-logo"
              />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:gap-x-12 header-links">
            <button onClick={scrollToHome} className="text-sm font-semibold text-white">HOME</button>
            <button onClick={scrollToProject} className="text-sm font-semibold text-white">PROJECTS</button>
            <button onClick={scrollToServices} className="text-sm font-semibold text-white">SKILLS</button>
            <button onClick={scrollToAbout} className="text-sm font-semibold text-white">ABOUT</button>
          </div>

          {/* Desktop Contact */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button onClick={scrollToContact} className="text-sm font-semibold text-white">
              CONTACT →
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-2xl"
            >
              ☰
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-gray-800 px-6 pb-4 space-y-3 mobile-menu">
            <button onClick={scrollToHome} className="block text-white">HOME</button>
            <button onClick={scrollToProject} className="block text-white">PROJECTS</button>
            <button onClick={scrollToServices} className="block text-white">SKILLS</button>
            <button onClick={scrollToAbout} className="block text-white">ABOUT</button>
            <button onClick={scrollToContact} className="block text-white">CONTACT</button>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
