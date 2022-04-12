
const searchInStoreForItemId=(item,store,typeComponent)=>{

    return store[typeComponent].items.has(item.id);
}


export default searchInStoreForItemId