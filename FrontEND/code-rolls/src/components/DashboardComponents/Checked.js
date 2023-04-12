import React from 'react'
import { BsPatchCheck, BsPatchCheckFill } from 'react-icons/bs';

const Checked = ({checked}) => {
    if(checked){
        return (
            <div className='column'>
                <BsPatchCheckFill size={30}/>
            </div>
        )
    }

  return (
    <div className='column'>
        <BsPatchCheck size={30}/>
    </div>
  )
}

export default Checked