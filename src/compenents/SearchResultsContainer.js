import { Link } from "react-router-dom";

function SearchResultsContainer({searchResults, error}) {
  return (
    <div className="searchResults"> 
        {error !== false && <li>{error}</li>}
        {searchResults.map(searchResult => 
            <li key={searchResult.id}>
                <Link to={`/movie/${searchResult.id}`}>
                {searchResult.original_title} {searchResult.release_date.substring(0, 4)}
                </Link>
            </li>)}
    </div>
  )
}
export default SearchResultsContainer