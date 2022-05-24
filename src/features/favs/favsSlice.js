import { API_KEY } from '../../globals/globals';
import { createSlice } from '@reduxjs/toolkit';

function getFavs(){
  let favsFromStorage = localStorage.getItem(API_KEY);
  if(favsFromStorage === null){
      favsFromStorage = [];
  }else{
      favsFromStorage = JSON.parse(favsFromStorage);
  }
  return favsFromStorage;
}

const initialState = {
  items: getFavs()
}

function getIndex(item, arr){
  return arr.findIndex(arrItem => arrItem.id === item.id);
}

// function favsSlice() {
//   return (
    
//   )
// }
// export default favsSlice

export const favsSlice = createSlice({
  name: 'favs',
  initialState,
  reducers: {
    addFav: (state, action) => {
      const newFavs = [...state.items, action.payload];
      localStorage.setItem(API_KEY, JSON.stringify(newFavs));
      state.items = newFavs;
    },
    deleteFav: (state, action) => {
      const itemsCopy = state.items;
      itemsCopy.splice(getIndex(action.payload, state.items), 1);
      localStorage.setItem(API_KEY, JSON.stringify(itemsCopy));
      state.items = itemsCopy;
    }
  },
});

export const {addFav, deleteFav} = favsSlice.actions
export default favsSlice.reducers;