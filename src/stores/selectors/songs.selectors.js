

import { createSelector } from "reselect";

let selectedAlbums =(state)=> state.itemsId;


export const selectSongs=createSelector(selectedAlbums,(state)=>{



    return [...state.albums.items.values()]
})

