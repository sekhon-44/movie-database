import { NavLink } from 'react-router-dom';

function NavMain({ openCloseDropDown }) {

    // Close dropdown menu when clicking anywhere in the targeted area
    function closeDropDown(e) {
        if (window.innerWidth < 600) {
            openCloseDropDown();
        } 
        e.target.blur();
    }

    return (
        <nav className="nav-main" onClick={closeDropDown}>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/favourites">Favourites</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavMain