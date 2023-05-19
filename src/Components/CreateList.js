import React from 'react'
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import Operation from './Operation';
function CreateList() {
  const navigate=useNavigate();
  const gotoHome =()=>{
    navigate('/')
  };
  return (
    <div>
    <Operation/>
      <br/>
      <Button variant="outlined" color="error" onClick={()=>gotoHome()}>
        gotoHome
      </Button>
    </div>
  )
}

export default CreateList
