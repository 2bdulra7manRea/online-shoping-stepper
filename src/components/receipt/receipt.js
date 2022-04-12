
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useSelector } from 'react-redux';
import CardMedia from '@mui/material/CardMedia';
import  "./receipt.css"
import Card from '@mui/material/Card';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p:4
};

const BasicModalReceipt= ({open,setOpen ,userData })=>{
  const handleClose = () => setOpen(false);

  const songs = useSelector(state=>state.itemsId.songs);
  console.log(songs);



  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

    <div className='row'>
      <div className='col-12 header-receipt mb-3'>
        <h3>Customer Receipt</h3>
      </div>
    </div>


    <div className='row'>
      <div className='col-12 text-center'>
        <h5 className='subtitle'>Thanks for your order !</h5>
        <p>Hi {userData.name}, we recieve your order.</p>
        </div>
    </div>


<div className='row mt-2 mb-2'>
  <div className='col-12 '>
    <h6 className='subtitle' >Personal information</h6>
  </div>
</div>

    <div className='row'>
      <div className='col-12 user-info'>
        <div>
        <h6>Name :</h6>
        <p>{userData.name}</p>  
        </div>
        <div>
        <h6>E-mail:</h6>
        <p>{userData.email}</p>  
        </div>
        <div>
        <h6>Mobile :</h6>
        <p>{userData.mobile}</p>  
        </div>
      </div>
    </div>

    <div className='row mt-2 mb-2'>
      <div className='col-12'>
      <h6 className='subtitle'>Items</h6>
      </div>
      </div>

      <div className='row' >
        <div className='col-12 d-flex'>
       {[...songs.items.values()].map((song)=>{
        return (<>
          <Card>
          <CardMedia
        component="img"
        height="50"
        image={song.image}
        alt="green iguana"
      />
      {song.name}
      <p style={{color:"red"}} >${song.price}</p>
          </Card>
        </>)
       })}
        </div>
      </div>


      <div className='row mt-2 mb-2'>
      <div className='col-12'>
      <h6 className='subtitle'>Summery</h6>
      </div>
      </div>


      <div className='row'>
      <div className='col-12 user-info'>
        <div>
        <h6>Total price</h6>
        <p>{songs.price}</p>  
        </div>
        <div>
        <h6>Quantity</h6>
        <p>{songs.count}</p>  
        </div>
      </div>
    </div>
  

      




        </Box>
      </Modal>
    </div>
  );
}


export default React.memo( BasicModalReceipt)