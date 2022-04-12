import { memo, useEffect, useState } from "react"
import "./viewCard.css"
import CheckIcon from '@mui/icons-material/Check';
import { dispatchAddFactory, dispatchDeleteFactory } from "../../stores/helpers/dispatchStore";
import { useDispatch } from "react-redux";
import searchInStore from "../../stores/helpers/searchInStore";
import store from "./../../stores/store";
import AddIcon from '@mui/icons-material/Add';
import Snackbar from '@mui/material/Snackbar';
const ViewCard=({item , type})=>{

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

return(<div className="view-card-custom" style={type==="songs"?{width:"90%", height:"200px"}:{}} >
<div className="card-overlay" style={select?{display:"block"}:{}} >

<div className="icon-box">
 <span style={{color:"white"}} onClick={()=>toggleSelection(item)}>
{select?<CheckIcon fontSize="large" />:<AddIcon fontSize="large"/>}    
</span> 
</div>

</div>
<div className='image-box'>
    <img width="100%" loading="lazy" src={item.image} height="100%" alt='pr-image' />
</div>

<div className="content-box">

<p>
{item.name}    
</p>
</div>

<Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Item is selected"
    />


</div>)


}

export default memo(ViewCard)