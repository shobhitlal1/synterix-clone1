export function Button({ children, className }) {
  return (
    <button className={`bg-black text-white px-4 py-2 rounded ${className}`}>
      {children}
    </button>
  );
}
