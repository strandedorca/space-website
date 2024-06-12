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
        {MissionsData.map((mission) => (
          <div className="flex gap-4 h-[400px]">
            <div className="w-[500px]">
              <img
                src={mission.img}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="self-center">
              <p>Our Mission</p>
              <h3 className="text-5xl">{mission.title}</h3>
              <p>{mission.description}</p>
              <Button>Learn More</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Missions;
