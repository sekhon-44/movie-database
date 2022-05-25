import { createSlice } from '@reduxjs/toolkit';
import { appStorageName } from '../../globals/globals';

function getFavs(){
  let favsFromStorage = localStorage.getItem(appStorageName);
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

export const favsSlice = createSlice({
  name: 'favs',
  initialState,
  reducers: {
    addFav: (state, action) => {
      const newFavs = [...state.items, action.payload];
      localStorage.setItem(appStorageName, JSON.stringify(newFavs));
      state.items = newFavs;
    },
    deleteFav: (state, action) => {
      const itemsCopy = state.items;
      itemsCopy.splice(getIndex(action.payload, state.items), 1);
      localStorage.setItem(appStorageName, JSON.stringify(itemsCopy));
      state.items = itemsCopy;
    }
  },
});

export const {addFav, deleteFav} = favsSlice.actions
export default favsSlice.reducer;