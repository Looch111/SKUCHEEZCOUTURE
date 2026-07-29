export default function Button({ variant = "primary", children, className = "", ...props }) {
  const base = "inline-flex items-center justify-center rounded-full font-sans tracking-wider transition-all duration-300 cursor-pointer border-none outline-none";

  const variants = {
    primary: "bg-white text-black px-7 py-3 text-sm hover:bg-[#f5d061] hover:text-black",
    secondary: "border border-white/25 bg-white/[0.04] backdrop-blur-md text-white px-7 py-3 text-sm hover:bg-white hover:text-black",
    gold: "bg-[#f5d061] text-black px-7 py-3 text-sm font-semibold hover:bg-white",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
