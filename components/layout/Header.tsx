import { useState, useEffect } from 'preact/hooks';
import { navItems } from 'Navs.ts';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  const normalizePath = (path: string) => path.endsWith('/') ? path.slice(0, -1) : path;

  useEffect(() => {
    setCurrentPath(normalizePath(new URL(window.location.href).pathname));

    const handlePopstate = () => {
      setCurrentPath(normalizePath(new URL(window.location.href).pathname));
    };

    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/60 backdrop-blur-xl border-b border-white/5 shadow-2xl transition-all duration-300">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <a href="/" className="group">
            <div className="flex items-center space-x-3">
              <img src="/favicon.png" alt="Logo" className="h-9 w-9 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-2xl font-bold tracking-tight text-white">ClassOS</span>
            </div>
          </a>
          
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 relative py-1 ${
                  currentPath === normalizePath(item.href)
                    ? "text-blue-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-blue-400"
                    : "text-gray-300"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 transition-all duration-300 ease-in-out"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-900/95 backdrop-blur-2xl border-t border-white/5 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-xl font-medium transition-all duration-300 ${
                currentPath === normalizePath(item.href) ? "text-blue-400" : "text-gray-300"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
