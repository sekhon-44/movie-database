import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavMain from "./NavMain";
import logo from "../images/logo.png";

function Header() {

    const [dropDown, setDropDown] = useState(false);

    // Close dropdown menu if media query is bigger than 600px
    useEffect(() => {

        let mq = window.matchMedia('(min-width: 600px)');

        mq.addEventListener('change', isDesktop);

    }, []);

    function isDesktop(e) {
        if (e.matches) {
            setDropDown(false);
        }
    }

    function openCloseDropDown() {
        setDropDown(!dropDown);
    }

    // Close dropdown menu when clicking anywhere in the targeted area
    function closeDropDown(e) {
        if (window.innerWidth < 600) {
            { dropDown && openCloseDropDown() }
        }

        e.target.blur();
    }

    return (
        <header className={dropDown ? "show" : "hide"}>
            <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" /></svg>

            <Link to="/" onClick={closeDropDown}>
                <img src={logo} alt="Logo for website" className="logo" />
            </Link>

            <button className="hamburger-menu" onMouseDown={(e) => { e.preventDefault(); }} onClick={openCloseDropDown}>
                <span className="button-content">
                    <span className="bar"></span>
                </span>
            </button>

            <NavMain openCloseDropDown={openCloseDropDown} />
        </header >
    )
}
export default Header