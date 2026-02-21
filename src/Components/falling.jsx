import React from "react";

import htmlImg from "../assets/html.jpg";
import cssImg from "../assets/css.png";
import jsImg from "../assets/js.png";
import reactImg from "../assets/react.png";
import nodeImg from "../assets/node.webp";
import expressImg from "../assets/express.png";
import mongodbImg from "../assets/mongodb.png";

function FallingDivs() {
  const images = [htmlImg, cssImg, jsImg, reactImg, nodeImg, expressImg, mongodbImg];
  const items = Array.from({ length: 25 });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none ">
      {items.map((_, i) => {
        const randomImage =
          images[Math.floor(Math.random() * images.length)];

        return (
          <img
            key={i}
            src={randomImage}
            alt="falling"
            className="absolute animate-fall opacity-20 rounded-full"
            style={{
              width: `${40 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        );
      })}
    </div>
  );
}

export default FallingDivs;