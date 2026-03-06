export function Button({ children, onClick, className = '' }) {
  return (
    <button 
      onClick={onClick}
      className={`px-4 py-2 border border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyber-accent ${className}`}
    >
      {children}
    </button>
  );
}
