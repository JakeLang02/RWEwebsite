import './Navbar.css';
import { Link } from 'react-router-dom';
import RWELogo from '../../images/RWELogoNoBG.png'

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-stone-900 to-indigo-600 py-2 px-4 shadow-md text-white fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={RWELogo} id="logo" alt="RWE Logo"className="h-28 w-28 mr-5"/> {/* further reduce the image dimensions */}
          <h1>Real World Engineering</h1>
        </div>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-gray-300 hover:underline text-base font-semibold">Home</Link></li>
          <li><Link to="/team" className="hover:text-gray-300 hover:underline text-base font-semibold">Team</Link></li>
          <li><Link to="/support" className="hover:text-gray-300 hover:underline text-base font-semibold">Support</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300 hover:underline text-base font-semibold">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
