function FavButton({ handleRemoveFav}) {
  
  
    return (
    <>
    {remove === false ? 
        <button onClick={handleAddFav}>Add To Favs</button> : 
        <button onClick={handleRemoveFav}>Remove From Favs</button>}
    </>
  )
}
export default FavButton