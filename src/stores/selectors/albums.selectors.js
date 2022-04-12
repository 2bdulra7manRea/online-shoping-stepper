import { createSelector } from "reselect";

let selectedSingers =(state)=> state.itemsId;


export const selectAlbums=createSelector(selectedSingers,(state)=>{

  let albums=[...state.singers.items.values()].flatMap(singer => {
      
    return singer.albums.flatMap((a)=>a)

  });

  return albums;
})





