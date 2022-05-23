function FavButton({ movieData, remove, handleFavClick}) {
  

    function handleAddFav() {
        handleFavClick(true, movieData)
    }

    function handleRemoveFav() {
        handleFavClick(false, movieData)
    }
  
    return (
    <>
    {remove === false ? 
        <button onClick={handleAddFav}>Add To Favs</button> : 
        <button onClick={handleRemoveFav}>Remove From Favs</button>}
    </>
  );
}

FavButton.defaultProps = {
    remove: false
}

export default FavButton