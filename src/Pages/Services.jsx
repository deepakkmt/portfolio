import React from "react";
import "../App.css";

function Services() {
  return (
    <div className="container my-5 card-container">
      <h1 className="text-center text-3xl font-bold mb-5 ">My SKILLS</h1>
  <div className="row justify-content-center g-4 ">

    {/* Card 1 */}
    <div className="col-md-3 d-flex justify-content-center">
      <div className="card d-flex flex-column" style={{ width: "18rem", height: "400px" }}>
        <h2 className="text-center mt-2">Frontend</h2>

        <img
          src="/src/assets/frontend.jpeg"
          className="card-img-top"
          alt="Frontend"
          style={{ height: "150px", objectFit: "contain" }}
        />

        <div className="card-body d-flex flex-column justify-content-between">
          <p className="card-text text-center">
            Building responsive and interactive UI using React, Tailwind and Bootstrap.
          </p>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="col-md-3 d-flex justify-content-center">
      <div className="card d-flex flex-column" style={{ width: "18rem", height: "400px" }}>
        <h2 className="text-center mt-2">Backend</h2>

        <img
          src="/src/assets/backend.png"
          className="card-img-top"
          alt="Backend"
          style={{ height: "150px", objectFit: "contain" }}
        />

        <div className="card-body d-flex flex-column justify-content-between">
          <p className="card-text text-center">
            Developing secure REST APIs, authentication systems, and scalable server-side applications.
          </p>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="col-md-3 d-flex justify-content-center">
      <div className="card d-flex flex-column" style={{ width: "18rem", height: "400px" }}>
        <h2 className="text-center mt-2">Database</h2>

        <img
          src="/src/assets/mongodb.jpg"
          className="card-img-top"
          alt="Database"
          style={{ height: "150px", objectFit: "contain" }}
        />

        <div className="card-body d-flex flex-column justify-content-between">
          <p className="card-text text-center">
            Designing MongoDB schemas, managing data efficiently, and optimizing queries.
          </p>
        </div>
      </div>
    </div>
       {/* Card 4 */}
       <div className="col-md-3 d-flex justify-content-center">
      <div className="card d-flex flex-column" style={{ width: "18rem", height: "400px" }}>
        <h2 className="text-center mt-2">Api integration</h2>

        <img
          src="/src/assets/api.webp"
          className="card-img-top"
          alt="Database"
          style={{ height: "150px", objectFit: "contain" }}
        />

        <div className="card-body d-flex flex-column justify-content-between">
          <p className="card-text text-center ">
            Designing MongoDB schemas, managing data efficiently, and optimizing queries.
          </p>
        </div>
      </div>
    </div>

  </div>
</div>
  );
}

export default Services;
