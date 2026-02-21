import React from "react";

function About() {
  return (
    <div className=" container min-h-screen bg-gray-700 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="about-heading">
           <p className="text-center text-xl">Deepakkumawat7053@gmail.com</p>
          <h1 className=" about-me text-4xl font-bold text-center mb-10">
          About Me
        </h1>
       
        <p className="text-center"> mob : +91 9571072003</p>

        </div>
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/src/assets/self.jpeg" 
              alt="Profile"
              className="w-72 h-72 object-cover rounded-2xl shadow-lg about-image"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 ">
              <span className="text-amber-400">MERN</span> Stack Developer
            </h2>

            <p className="text-white mb-4 leading-relaxed">
              I am a passionate Full Stack MERN Developer skilled in building
              modern, scalable, and responsive web applications. I specialize in
              React for frontend development and Node.js with Express for backend
              services.
            </p>

            <p className="text-white leading-relaxed">
              My goal is to develop high-performance web applications that solve
              real-world problems and deliver excellent user experiences.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            My Skills
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="bg-black shadow-md p-6 rounded-xl">
              <h3 className="font-semibold text-lg">Frontend</h3>
              <p className="text-gray-600 mt-2">React, Tailwind, Bootstrap</p>
            </div>

            <div className="bg-black shadow-md p-6 rounded-xl">
              <h3 className="font-semibold text-lg">Backend</h3>
              <p className="text-gray-600 mt-2">Node.js, Express</p>
            </div>

            <div className="bg-black shadow-md p-6 rounded-xl">
              <h3 className="font-semibold text-lg">Database</h3>
              <p className="text-gray-600 mt-2">MongoDB, Mongoose</p>
            </div>

            <div className="bg-black shadow-md p-6 rounded-xl">
              <h3 className="font-semibold text-lg">Tools</h3>
              <p className="text-gray-600 mt-2">Git, GitHub, Vercel</p>
            </div>

          </div>
        </div>
        <div className="mt-10 text-center">
          <a
            href="/src/assets/Deepak kumawat (5).pdf"
            download
            className="inline-block bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Download Resume
          </a>
        </div>

      </div>
    </div>
  );
}

export default About;