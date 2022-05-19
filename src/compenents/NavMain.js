import { NavLink } from 'react-router-dom';

function NavMain({closeDropDown}) {

    return (
        <nav className="nav-main">
            <ul>
                <li>
                    <NavLink to="/" onClick={closeDropDown}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" onClick={closeDropDown}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/favourites" onClick={closeDropDown}>Favourites</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavMain