import './Navbar.css';
import { Link } from 'react-router-dom';
import RWELogo from '../../images/RWENiceLogo.png'

function Navbar(){
  return (
    <div className="navbar bg-gradient-to-r from-stone-900 to-stone-900 py-2 px-4 shadow-md text-white fixed top-0 left-0 w-full z-50">
      <div className="leftSide">
        <img src={RWELogo} id="logo" alt="RWE Logo"className="h-24 w-27 mr-5"/> {/* further reduce the image dimensions */}
      </div>
      <div className="rightSide">
          <Link to="/" className="hover:text-gray-300 hover:underline text-base font-semibold">Home</Link>
          <Link to="/team" className="hover:text-gray-300 hover:underline text-base font-semibold">Team</Link>
          <Link to="/support" className="hover:text-gray-300 hover:underline text-base font-semibold">Support</Link>
          <Link to="/contact" className="hover:text-gray-300 hover:underline text-base font-semibold">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
