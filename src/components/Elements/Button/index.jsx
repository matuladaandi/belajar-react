// Button.js
const Button = ({ children, className }) => {
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
