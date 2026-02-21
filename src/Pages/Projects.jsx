import React from "react";
import { useEffect, useState } from "react";

function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/deepakkmt/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <div className="bg-gray-900 py-20 container projects-main-container">
      <h1 className="text-3xl font-bold text-center p-4">My Projects</h1>

      <div className="grid md:grid-cols-3 gap-8 px-10 projects-container">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="bg-gray-700 shadow-lg rounded-xl p-6 hover:scale-105 transition flex flex-col justify-between
"
          >
            <h2 className="text-xl font-semibold">{repo.name}</h2>
            <p className="text-white mt-2">
              {repo.description || "No description available"}
            </p>

            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 mt-4 inline-block"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
