import React from "react";
import Button from "../Button";

const Hero = () => {
  return (
    <div className="bg-black/20 h-full text-white flex items-center">
      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-4 lg:pr-36">
          <h1 data-aos="fade-up" className="text-5xl font-bold uppercase">
            Orbit The Earth
          </h1>
          <p data-aos="fade-up" data-aos-delay="300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
            doloremque dignissimos culpa consequatur earum enim, sequi tenetur,
            molestiae quasi rem ducimus incidunt placeat dolorem cupiditate
            quaerat maxime voluptates dolores quia.
          </p>
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
