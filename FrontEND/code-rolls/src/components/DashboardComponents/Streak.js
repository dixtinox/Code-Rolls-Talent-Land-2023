import React from 'react'
import Checked from './Checked'
import { BsPatchCheck, BsPatchCheckFill } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.css';


const Streak = ({title, buttonText, containerColor}) => {
  return (
    <div className='d-flex align-items-center mb-3'>
        <div className='streak d-block' style={{ 
        backgroundColor: containerColor
      }}>
            <h5>{title}</h5>
            <div className="columns">
                <Checked checked={true}/>
                <Checked checked={true}/>
                <Checked checked={true}/>
                <Checked checked={true}/>
                <Checked checked={true}/>
                <Checked checked={false}/>
                <Checked checked={false}/>
            </div>
        </div>
        <button className='ms-3'>{buttonText}</button>
    </div>

  )
}

export default Streak