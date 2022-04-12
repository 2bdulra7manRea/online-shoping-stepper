import { calculatePrices } from "../helpers/caluculation";


const reducerItemsId=(state={
    singers:{price:0 , count:0 , items:new Map()},
    albums:{price:0 , count:0 , items:new Map()},
    songs:{price:0 , count:0 , items:new Map()}
},action)=>{
    let price=calculatePrices(action.payload,action.typeComponent)
switch (action.type) {
    
    case "ADD_ITEM_ID":
        state[action.typeComponent].count=state[action.typeComponent].count+1;
        state[action.typeComponent].price=state[action.typeComponent].price+price
        state[action.typeComponent].items.set(action.payload.id,{...action.payload,price,})
        return state;
    case "DELETE_ITEM_ID":
        state[action.typeComponent].count=state[action.typeComponent].count-1;
        state[action.typeComponent].price=state[action.typeComponent].price-price
        state[action.typeComponent].items.delete(action.payload.id)
        return state;
    default:
        return state
}
}

export default reducerItemsId