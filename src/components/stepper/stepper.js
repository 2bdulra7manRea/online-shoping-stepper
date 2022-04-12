import {memo, useState} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Albums from '../albums/albums';
import Songs from '../songs/songs';
import Singers from '../singers/singers';
import SubmitRequest from '../submitRequest/submitRequest';

const steps = ['Singers', 'Albums', 'Songs' , 'Submit Request'];

const HorizontalLinearStepper= ({activeStep, setActiveStep})=> {


function swtichComponent(num){

switch (num) {
  case 0:
    return <Singers/>
    case 1:
    return <Albums/>  
    case 2:
      return <Songs/>
    case 3:
      return <SubmitRequest />
  default:
    return <span></span>;
}

}



  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  return (
    <Box sx={{ width: '100%' ,}}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>      
      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <>
          <div className='row'>
            <div className='col-12'>
              {swtichComponent(activeStep)} 
            </div>
          </div>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              variant="contained"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>


            <Box sx={{ flex: '1 1 auto' }} />
              {activeStep === steps.length - 1 ? '' : <Button variant="contained" onClick={handleNext} >Next</Button>}
          </Box>
        </>
      )}
    </Box>
  );
}

export default memo(HorizontalLinearStepper)