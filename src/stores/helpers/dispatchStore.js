import { addItemId, deleteItemId } from "../actions/itemId.action";



export const dispatchAddFactory=(payload,typeComponent,dispatch)=>{

dispatch(addItemId(payload,typeComponent))

}

export const dispatchDeleteFactory=(payload,typeComponent,dispatch)=>{
    dispatch(deleteItemId(payload,typeComponent))

    
    
}

