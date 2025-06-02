import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <h1>Vårt Bryllup</h1>
            <ul>
                <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
                <li><NavLink to="/details" className={({ isActive }) => isActive ? 'active' : ''}>Details</NavLink></li>
                <li><NavLink to="/rsvp" className={({ isActive }) => isActive ? 'active' : ''}>RSVP</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;
