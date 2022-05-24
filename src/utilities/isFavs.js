function isFavs(arr, path, id) {
   
    if(path === '/favourites'){
        return true;
    }

    if(arr.length === 0) {
        return false;
    }

    return arr.some((obj) => obj.id === id);

}
export default isFavs