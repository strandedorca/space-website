import React from "react";
import videoBg from "./assets/earth-bg.mp4";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import surface from "./assets/moon-surface-hd.png";
import Missions from "./components/Missions/Missions";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      {/* Menu and Hero Section */}
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="object-cover h-full w-full absolute -z-10"
        >
          <source src={videoBg} type="video/mp4" />
        </video>
        <Navbar />
        <Hero />
        {/* Surface Section */}
        <div className="absolute z-10 bottom-0 w-full">
          <img src={surface} alt="" className="w-full brightness-50" />
        </div>
        <div className="h-[20px] sm:h-[50px] md:h[60px] w-full absolute bottom-0 z-20 bg-gradient-to-b from-transparent to-gray-950 from-10% to-90%"></div>
      </div>

      {/* Services Card Section */}
      <Services />

      {/* Missions Section */}
      <Missions />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;
