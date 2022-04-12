import {useState } from "react"
import SideBar from "../../components/sidebar/sidebar"
import HorizontalLinearStepper from "../../components/stepper/stepper"


const Home=()=>{
const [activeStep,setActiveStep]=useState(0);

return(<>
<div className="home-page">
<div className="stepper-box">
    <div  className="row">
        <div className="col-9">
         <HorizontalLinearStepper activeStep={activeStep} setActiveStep={setActiveStep} ></HorizontalLinearStepper>   
        </div>
        <div className="col-3">
            <SideBar activeStep={activeStep} ></SideBar>    
        </div>
    </div>
</div>
</div>
</>)

}

export default Home