function isFav(arr, path, id){
    if(path === '/favs'){
        return true;
    }

    if(arr.length === 0){
        return false;
    }

    return arr.some((obj => obj.id === id));
}

export default isFav;