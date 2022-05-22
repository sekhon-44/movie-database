import { Link } from "react-router-dom";

function SearchResultsContainer({ searchResults, error, closeDropDown}) {

  return (
    <div className="search-results">
      <ul>
        {error !== false && <li>{error}</li>}
        {searchResults.map(searchResult =>
          <li key={searchResult.id}>
            <Link to={`/movie/${searchResult.id}`} onClick={closeDropDown}>
              {searchResult.original_title} {(typeof (searchResult.release_date) !== 'undefined' && (searchResult.release_date) !== '') && `(${searchResult.release_date.substring(0, 4)})`}
            </Link>
          </li>)}
      </ul>
    </div>
  )
}
export default SearchResultsContainer