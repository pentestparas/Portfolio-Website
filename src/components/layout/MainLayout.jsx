import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-cyber-dark text-gray-300 font-mono selection:bg-cyber-accent selection:text-black">
      <Navbar />
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <Footer />
    </div>
  );
}
