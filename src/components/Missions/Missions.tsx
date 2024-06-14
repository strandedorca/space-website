import React from "react";
import satellite from "../../assets/satelite1.jpg";
import satellite2 from "../../assets/satelite2.jpg";
import Button from "../Button";

const MissionsData = [
  {
    img: satellite,
    title: "Rapidcast",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, quo nulla quam accusantium ex reiciendis laudantium aliquam architecto maiores quaerat, nesciunt fugiat velit facere dolores placeat modi nemo dolorum laborum!",
  },
  {
    img: satellite2,
    title: "Highground",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, quo nulla quam accusantium ex reiciendis laudantium aliquam architecto maiores quaerat, nesciunt fugiat velit facere dolores placeat modi nemo dolorum laborum!",
  },
];

const Missions = () => {
  return (
    <div className="bg-slate-950 text-white">
      <div className="container">
        {MissionsData.map((mission, i) => (
          <div
            className={
              "w-full flex gap-16 h-auto md:h-[450px] p-10 items-center flex-col md:flex-row"
            }
          >
            <div className={`flex-1 h-full ${i % 2 == 1 && "md:order-last"}`}>
              <img
                data-aos="zoom-in"
                src={mission.img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className={`space-y-4 p-6 pt-0 flex-1 border-sky-800
              ${
                i % 2 == 1
                  ? "border-l-2 border-b-2 rounded-bl-xl"
                  : "border-r-2 border-b-2 rounded-br-xl"
              }`}
            >
              <p data-aos="fade-up" className="uppercase text-lg text-sky-700">
                Our Mission
              </p>
              <h3 data-aos="fade-up" data-aos-delay="300" className="text-5xl">
                {mission.title}
              </h3>
              <p data-aos="fade-up" data-aos-delay="500">
                {mission.description}
              </p>
              <Button>Learn More</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Missions;
