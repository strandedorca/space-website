import { FaReact, FaRocket } from "react-icons/fa";
import { RiGpsFill } from "react-icons/ri";
import waveGif from "../../assets/wave Gif.gif";

const ServiceData = [
  {
    title: "GPS",
    content: "300-1500km",
    description:
      "Part of the Global Positioning System (GPS) used for navigation.",
    icon: <RiGpsFill />,
    aosDelay: "700",
  },
  {
    title: "HST",
    content: "300-1500km",
    description:
      "Used for astronomical observations, capturing stunning images of the universe.",
    icon: <FaReact />,
    aosDelay: "300",
  },
  {
    title: "ISS",
    content: "500-1500km",
    description:
      "It's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory.",
    icon: <FaRocket />,
    aosDelay: "500",
  },
];

const Services = () => {
  return (
    <div className="min-h-[400px] bg-slate-950 text-white relative pt-8">
      <div className="container">
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-6">
          {ServiceData.map((service) => (
            <div className="lg:w-[300px] flex flex-col text-center justify-center items-center w-full space-y-3 bg-sky-800/60 rounded-xl mx-auto px-5 py-8">
              <div className="text-7xl">{service.icon}</div>
              <p className="text-xl">{service.title}</p>
              <p className="text-xl">{service.content}</p>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <img
          src={waveGif}
          alt=""
          className="w-full h-[200px] object-cover -translate-y-24 mix-blend-screen"
        />
      </div>
    </div>
  );
};

export default Services;
