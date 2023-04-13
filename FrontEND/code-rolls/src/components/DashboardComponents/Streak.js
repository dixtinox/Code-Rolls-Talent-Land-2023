import React from 'react'
import Checked from './Checked'
import axios from 'axios';
import { BsPatchCheck, BsPatchCheckFill } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.css';


const Streak = ({title, buttonText, containerColor, valores, streak, reload}) => {

  async function handleClick(){
    if(streak==0){
      const response = await axios.put('http://localhost:3000/objectives/drinkWater', {
        user_id: '6436005c3c4616f372641688'
      })
      reload();
    }
    if (streak==1){
      console.log('Boton 2')
      const response = await axios.put('http://localhost:3000/objectives/followDiet', {
        user_id: '6436005c3c4616f372641688'
      })
      reload();
    }
    if (streak==2){
      console.log('Boton 3')
      const response = await axios.put('http://localhost:3000/objectives/exercise', {
        user_id: '6436005c3c4616f372641688'
      })
      reload();
    }
  }

  return (
    <div className='d-flex align-items-center mb-3'>
        <div className='streak d-block' style={{ 
          backgroundColor: containerColor
        }}>
          <h5>{title}</h5>
          <div className="columns">
            {valores.map(obj => (
              <div key={obj.id}>
                {Object.values(obj)[streak] ? <Checked checked={true}/> : <Checked checked={false}/>}
              </div>
            ))}
          </div>
        </div>
        <button className='ms-3' onClick={handleClick}>{buttonText}</button>
    </div>

  )
}

export default Streak