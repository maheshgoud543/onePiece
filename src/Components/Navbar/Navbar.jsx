import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import { useState } from 'react';
const Navbar = () => {
    const [menuopen, setMenuOpen] = useState(false)
    return (
        <div>
            <nav>
                <Link to='/Home' className='logo'>
                    <img src='https://1000logos.net/wp-content/uploads/2022/08/One-Piece-Logo.jpg' className='img' />
                </Link>
                <div className='menu' onClick={() => setMenuOpen(!menuopen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuopen ? "open" : ""}>
                    <li>
                        <NavLink to='/Home'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Characters'>Characters</NavLink>
                    </li>
                    <li>
                        <NavLink to="/DevilFruits">DevilFruits</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Arcs'>Arcs</NavLink>
                    </li>
                    <li>
                        <NavLink to='Maps'>Maps</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;