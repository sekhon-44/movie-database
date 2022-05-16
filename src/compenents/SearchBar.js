import { useState, useEffect } from "react";

function SearchBar({onSearchSubmit, clearResults, clearError }) {

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
        <div>
            <input type="text" id="search-bar" placeholder="i.e. Jurassic Park" value={debouncedQuery} onChange={(e) => setdebouncedQuery(e.target.value)}/>
        </div>
  )
}
export default SearchBar