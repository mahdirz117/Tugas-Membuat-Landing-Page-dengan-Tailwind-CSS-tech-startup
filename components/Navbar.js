import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">TechStartup</div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
          </button>
        </div>
        <ul className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li className="md:ml-6"><a href="#" className="text-white hover:text-gray-300">Home</a></li>
          <li className="md:ml-6"><a href="#services" className="text-white hover:text-gray-300">Services</a></li>
          <li className="md:ml-6"><a href="#about" className="text-white hover:text-gray-300">About Us</a></li>
          <li className="md:ml-6"><a href="#contact" className="text-white hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
