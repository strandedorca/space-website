import Button from "../Button";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="container grid grid-cols-1 sm:grid-cols-2">
        <div className="space-y-4">
          <p className="text-3xl font-bold">Be Ready To Grow</p>
          <p>Get exclusive update straight into your inbox</p>
          <form action="" className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border border-white rounded-md focus:outline-none focus:border-2 focus:border-white px-3"
            />
            <Button>Subscribe</Button>
          </form>
        </div>
        <div className="flex gap-4">
          <div>
            <p className="font-bold text-lg">Quick Links</p>
            <ul className="space-y-1">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Login</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-lg">Quick Links</p>
            <ul className="space-y-1">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Login</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-lg">Contact Us</p>
            <ul className="space-y-1">
              <li>Ashfield, Sydney</li>
              <li>abc@gmail.com</li>
              <li>+72 735 283 12</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
