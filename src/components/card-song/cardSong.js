
import { memo, useEffect, useState } from "react"
import CheckIcon from '@mui/icons-material/Check';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { dispatchAddFactory, dispatchDeleteFactory } from "../../stores/helpers/dispatchStore";
import { useDispatch } from "react-redux";
import searchInStore from "../../stores/helpers/searchInStore";
import store from "./../../stores/store";
import Snackbar from '@mui/material/Snackbar';
import "./cardSong.css"
const CardSong=({item , type})=>{

const [select, setSelect]=useState(false);
const [open, setOpen] = useState(false);
useEffect(()=>{
  let checkForItem = searchInStore(item,store.getState().itemsId,type)
    setSelect(checkForItem);
},[])


const handleClose = (event,reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };


const dispatch=useDispatch();
const toggleSelection=(item)=>{
    if(!select){
    setSelect(true)      
    dispatchAddFactory(item,type,dispatch)
    setOpen(true);
    }else{
    setSelect(false) 
    dispatchDeleteFactory(item,type,dispatch)  
    }
}

return(<div className="view-card-custom-song row">
<div className='col-4 image-box-song'>
    <img width="100%" src={item.image} height="100%" alt='pr-image' />
</div>


<div className="col-4 content-box">

<p>
{item.name}    
</p>
</div>

<div className="col-4 d-flex justify-content-center">
<span className="icon-card-song" onClick={()=>toggleSelection(item)}>
{select?<CheckIcon/>:<AddCircleOutlineIcon/>}    
</span>   
</div>



<Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Item is selected"
    />


</div>)


}

export default memo(CardSong)