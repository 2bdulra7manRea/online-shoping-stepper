import { createSelector } from "reselect";


const extractedItemsId = (state)=>state.itemsId;

const selectItemsId=createSelector(extractedItemsId,(id)=>id)

export default selectItemsId;