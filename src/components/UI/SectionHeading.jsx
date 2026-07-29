export default function SectionHeading({ children, className = "" }) {
  return (
    <h2 className={`font-serif text-[4rem] font-light text-white tracking-[-0.015em] leading-[1.05] ${className}`}>
      {children}
    </h2>
  );
}
