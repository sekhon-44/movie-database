import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavMain from "./NavMain";
import logo from "../images/logo.png";
import { API_KEY } from "../globals/globals";
import SearchBar from "./SearchBar";
import SearchResultsContainer from "./SearchResultsContainer";

function Header() {

    const [dropDown, setDropDown] = useState(false);

    const [searchResults, setSearchResults] = useState([]);

    const [searchBar, setSearchBar] = useState(false);

    const [error, setError] = useState(false);

    const errorMessage = 'Search result not found.';

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
        { dropDown && openCloseDropDown() }
        { searchBar && openCloseSearchBar() }
        { searchResults && setSearchResults([]) }
        setError(false);
        console.log('close');
        e.target.blur();
    }

    function openCloseSearchBar() {
        setSearchBar(!searchBar);
    }

    // Search for movie 

    // https://api.themoviedb.org/3/search/movie?api_key=81121bc2581cfdb0ee8435c1bf9d3ea5&language=en-US&page=1&include_adult=false

    // https://www.youtube.com/watch?v=UKmsNUk7RxM

    // https://javascript.plainenglish.io/how-to-create-an-optimized-real-time-search-with-react-6dd4026f4fa9

    const onSearch = async query => {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&include_adult=false`);

        const data = await response.json();

        if (data.results.length === 0) {
            setError(errorMessage);
        } else {
            setSearchResults(data.results.splice(0, 10));
        }
    }

    const clearError = () => setError(false);

    const clearResults = () => setSearchResults([]);

    return (
        <header
            className={`${dropDown ? "showDropDown" : "hideDropDown"} ${searchBar ? "showSearchBar" : "hideSearchBar"}`}>
            {/* onBlur={(e) => { closeDropDown(e); } */}

            <svg xmlns="http://www.w3.org/2000/svg"
                className="search-icon"
                viewBox="0 0 24 24"
                onClick={searchBar ? closeDropDown : openCloseSearchBar}><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" /></svg>

            {/* Logo */}
            <Link to="/" onClick={closeDropDown}>
                <img src={logo} alt="Logo for website" className="logo" />
            </Link>

            {/* Hamburger Button */}
            <button className="hamburger-menu" onMouseDown={(e) => { e.preventDefault(); }} onClick={openCloseDropDown}>
                <span className="button-content">
                    <span className="bar"></span>
                </span>
            </button>

            {/* Nav menu */}
            <NavMain closeDropDown={closeDropDown} />

            {/* Search Bar */}
            <SearchBar
                onSearch={query => onSearch(query)}
                clearResults={clearResults}
                clearError={clearError}
                closeDropDown={closeDropDown} />

            <SearchResultsContainer
                className={`${searchResults.length === 0 && !error ? "search-results-hide" : "search-results"}`}
                searchResults={searchResults}
                error={error}
                closeDropDown={closeDropDown} />
        </header >
    )
}
export default Header