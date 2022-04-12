import { memo,useEffect, useState } from "react"
import store from "../../stores/store";

const SideBar=({activeStep})=>{

   const [orders, setOrders]=useState({singers:null,albums:null , songs:null});
   const stepsComponets=['singers','albums','songs'];
   const updateOrders =(d)=>{
       setOrders((prev)=>{
           return {...prev,...store.getState().itemsId}
       })  
   };

   useEffect(()=>{
   store.subscribe(updateOrders)
   },[])
   
return(<>
<div className="row">

<div className='col-12 d-flex flex-column justify-content-center'>
{!!orders[stepsComponets[activeStep]]?<>
<div className="card-ux">
<p>Count</p>
<p>{orders[stepsComponets[activeStep]].count}</p>
</div>
<div className="card-ux">
<p>Price</p>
<p>${orders[stepsComponets[activeStep]].price}</p> 
</div></>:<span></span>
}


</div>
</div>


</>)

}

export default memo(SideBar)