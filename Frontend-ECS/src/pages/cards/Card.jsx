import React, { useEffect } from "react";
import "./card.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Card({ title, description, imageUrl }) {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,    
    });
  }, []);

  if (title === "Sibajit Mazumder") {
    console.log("hi");
  }

  return (
    <div
      className="card group relative h-[40vh] w-[35vh] flex flex-col items-center justify-end p-4 bg-cover bg-center shadow-lg rounded-lg overflow-hidden"
      style={{
        backgroundImage: `url('https://i.postimg.cc/ZnmFTwD6/Card.png')`,
      }}
      data-aos="flip-left" 
    >
      {/* Image Container */}
      <div className="image-container relative w-full h-full flex justify-center items-center">
        <img
          src={imageUrl} // Member's image
          alt={title}
          className="image h-full w-full object-contain sm:transition-transform sm:duration-200 sm:ease-in-out sm:transform group-hover:scale-110"
        />
      </div>

      {/* Static Text Container */}
      <div
        className="text-container absolute bottom-2 left-0 w-full h-[25%] bg-cover bg-center flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url('https://i.postimg.cc/G3PxM1HK/Vector.png')`,
        }}
      >
        <h2 className="text-lg font-bold text-white opacity-100">{title}</h2>
        <p className="text-sm text-gray-200 opacity-100">{description}</p>
      </div>
    </div>
  );
}
