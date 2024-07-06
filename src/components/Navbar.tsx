import React, { useState } from 'react'

const Navbar:React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              
              <img
                className="block lg:hidden h-8 w-auto"
                src="/logo.svg"
                alt="Logo"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="/logo.svg"
                alt="Logo"
              />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
              
                <a
                  href="#"
                  className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Products
                </a>
                <a
                  href="#"
                  className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Tools
                </a>
                <a
                  href="#"
                  className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Resources
                </a>
                <a
                  href="#"
                  className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Company
                </a>
              </div>
            </div>
          </div>
          
        </div>
        
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-5">
            
              <a
                href="#"
                className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
              >
                Products
              </a>
              <a
                href="#"
                className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
              >
                Tools
              </a>
              <a
                href="#"
                className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
              >
                Resources
              </a>
              <a
                href="#"
                className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
              >
                Company
              </a>
          
            
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600">
              Get Started
            </button>
          
            </div>
          </div>
        )}
      </div>
    </nav>

    
  );
}

export default Navbar

