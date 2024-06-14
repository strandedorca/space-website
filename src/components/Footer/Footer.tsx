import { HiLocationMarker } from "react-icons/hi";
import Button from "../Button";
import { MdCall, MdMessage } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="container grid md:grid-cols-3 gap-6 py-10 text-center md:text-left">
        {/* First col */}
        <div className="space-y-4">
          <p className="text-3xl font-bold">Be Ready To Grow</p>
          <p>Get exclusive update straight into your inbox</p>
          <form action="" className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border border-white rounded-md focus:outline-none focus:border-2 focus:border-white px-3 flex-1"
            />
            <Button>Subscribe</Button>
          </form>
        </div>
        {/* Second col */}
        <div className="flex gap-4 justify-evenly">
          <div>
            <p className="font-bold text-lg mb-4">Quick Links</p>
            <ul className="space-y-1">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Login</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-lg mb-4">Quick Links</p>
            <ul className="space-y-1">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Login</li>
            </ul>
          </div>
        </div>
        {/* Third col */}
        <div className="mx-auto">
          <p className="font-bold text-lg mb-4">Contact Us</p>
          <ul className="space-y-2">
            <li className="flex gap-2 items-center">
              <HiLocationMarker />
              <p>Ashfield, Sydney</p>
            </li>
            <li className="flex gap-2 items-center">
              <MdMessage />
              <p>abc@gmail.com</p>
            </li>
            <li className="flex gap-2 items-center">
              <MdCall />
              <p>+72 735 283 12</p>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom section */}
      <div className="container flex flex-col sm:flex-row justify-between py-8 px-0 border-t-2 border-gray-400">
        <p className="text-sm text-gray-400">Copyright &copy; 2023 by TCJ</p>
        <div className="text-4xl flex gap-4">
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
        </div>
        <div className="text-sm text-gray-400 space-x-4">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
