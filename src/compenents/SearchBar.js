import { useState, useEffect } from "react";

function SearchBar({ onSearchSubmit, clearResults, clearError }) {

    const [query, setQuery] = useState('');

    const [searchResults, setSearchResults] = useState([]);

    const [debouncedQuery, setdebouncedQuery] = useState(query);

    useEffect(() => {
        const timer = setTimeout(() => setQuery(debouncedQuery), 1000);
        return () => clearTimeout(timer);
    }, [debouncedQuery]);

    useEffect(() => {
        clearResults();
        clearError();

        if (query !== '') {
            onSearchSubmit(query);
        } else {
            clearResults();
        }
    }, [query]);

    return (
        <div className="search-bar">
            <input type="text"
                className="search-bar-field"
                placeholder="i.e. Jurassic Park"
                value={debouncedQuery}
                onChange={(e) => {
                    // Check if the first input value is a "space"
                    if (e.target.value.indexOf(" ") > -1) {
                        alert("Space not allowed");
                        return;
                    }
                    setdebouncedQuery(e.target.value)
                }}
            />
        </div>
    )
}
export default SearchBar