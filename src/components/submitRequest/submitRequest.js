import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';
import BasicModalReceipt from '../receipt/receipt';
const SubmitRequest=({clickOnSubmit})=>{


const [inputValues,setInputValues]=useState({name:"", email:"" , mobile:""})
const [userData,setUserData]=useState({})
const [validation, setValidation]=useState({name:false ,mobile:false , email:false})

const [ open ,setOpen]=useState(false)

const changeInputsValue=(ev,inputName)=>{
switch (inputName) {
    case "name":
        setInputValues({...inputValues,name:ev.target.value})
    break;
    case "mobile":
        if(isNaN(ev.target.value)){
            return;
        }
        setInputValues({...inputValues,mobile:ev.target.value})
    break;
    case "email":
        setInputValues({...inputValues,email:ev.target.value})
    break;
    default:
        break;
}


}



function validateForm(){
    let valid = true;
   let inputs= Object.entries(inputValues)
    for (const [key , value] of inputs) {
        if(!value){
            valid=false;
            setValidation((prev,current)=>{
                console.log(prev,current)
                return {...prev,[key]:true}
            })
        }
    }  

    return valid
}


function prepareForm(){
let fd = {};
fd.name=inputValues.name
fd.mobile=inputValues.mobile
fd.email=inputValues.email
return fd;
}


function submit (){

let result= validateForm();
if(!result){
    return;
}

const formData=prepareForm();
setUserData(formData)
setOpen(true)
}




return (<>
<div className='row mt-5'>
<div className='col-12'>
    <h6>Personal Information</h6>
</div>
 </div>

 <Box
      component="form"
      sx={{ 
        '& .MuiTextField-root': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >

<div>
<TextField
          error={validation.name && !inputValues.name}
          id="standard-error-helper-text"
          variant="outlined" 
          label="Name" 
          required
          type="text"
          onChange={(ev)=>changeInputsValue(ev,'name')}
          value={inputValues.name}
          helperText={validation.name?"Name is required":""}
    />
</div>
<div>
<TextField
          error={validation.email && !inputValues.email}
          id="standard-error-helper-text"
          variant="outlined" 
          label="E-mail" 
          required
          type="email"
          onChange={(ev)=>changeInputsValue(ev,'email')}
          value={inputValues.email}
          helperText={validation.email?"E-mail is required":""}
    />
</div>
<div>
<TextField
          error={validation.mobile && !inputValues.mobile}
          id="standard-error-helper-text"
          variant="outlined" 
          label="Mobile" 
          required
          type="tel"
          onChange={(ev)=>changeInputsValue(ev,'mobile')}
          value={inputValues.mobile}
          helperText= {validation.mobile?"Mobile is required":""}
    />
</div>



</Box>

<div className='row mt-3 mb-5'>
    <div className='col-12 text-center'>
        <Button variant="contained" onClick={submit}>Submit Request</Button>
    </div>
</div>

<BasicModalReceipt open={open} userData={userData} setOpen={setOpen} ></BasicModalReceipt>
</>)    
}
    
export default SubmitRequest