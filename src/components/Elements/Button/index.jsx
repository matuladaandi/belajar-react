const Button = ({ classname = "default", label = "Button" }) => {
  // Daftar kelas warna berdasarkan variant
  const variantClasses = {
    red: "bg-red-300",
    slate: "bg-slate-300",
    blue: "bg-blue-400",
    green: "bg-green-300",
    default: "bg-gray-300", // Kelas default jika variant tidak diberikan
  };

  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variantClasses[classname]} text-white`}
    >
      {label}
    </button>
  );
};

export default Button;
