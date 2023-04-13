import React from 'react'
import DayAchivement from './DayAchivement'
import 'bootstrap/dist/css/bootstrap.css';

const PerfectDays = ({title, containerColor, valores, streak, reload}) => {
  return (
    <div className='d-flex align-items-center mb-3'>
        <div className='streak d-block' style={{ 
          backgroundColor: containerColor
        }}>
          <h5>{title}</h5>
          <div className="columns">
            {valores.map(dia => {
                let colorData = [];
                Object.values(dia)[0] ? colorData.push("green"): colorData.push("gray");
                Object.values(dia)[1] ? colorData.push("blue"): colorData.push("gray");
                Object.values(dia)[2] ? colorData.push("orange"): colorData.push("gray");
                    return <DayAchivement arregloColor={colorData}/>
            })}
          </div>
        </div>
    </div>
  )
}

export default PerfectDays