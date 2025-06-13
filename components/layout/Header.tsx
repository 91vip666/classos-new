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
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/">
          <div className="flex items-center space-x-2">
            <img src="/favicon.png" alt="Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-gray-100">ClassOS</span>
          </div>
        </a>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-gray-200 hover:text-blue-500 transition-colors relative ${
                currentPath === normalizePath(item.href)
                  ? "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-[#7dd3fc] after:transition-all"
                  : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-200 focus:outline-none">
            <svg
              className="w-6 h-6 transition-all duration-300 ease-in-out"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </nav>
      <div
        className={`md:hidden bg-opacity-10 backdrop-blur-md shadow-sm overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[calc(100vh-64px)] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`block text-gray-200 hover:text-blue-500 transition-colors py-2 relative ${
                currentPath === normalizePath(item.href)
                  ? "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-[#7dd3fc] after:transition-all"
                  : ""
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