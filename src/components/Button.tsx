interface ButtonProps {
  children: string;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-sky-800 text-white rounded-md py-2 px-4 hover:bg-sky-950 duration-200">
      {children}
    </button>
  );
};

export default Button;
