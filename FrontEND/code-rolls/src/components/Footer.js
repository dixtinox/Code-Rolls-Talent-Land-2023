import React from 'react'

import DayAchivement from './DashboardComponents/DayAchivement'

const AppFooter = () => {
  return (
    <div className='AppFooter container-fluid'>
        <h5 style={{paddingLeft: '25px', marginRight: 'auto'}}>Code Rolls</h5>
        <h5 style={{paddingRight: '25px'}}>Salud Digna</h5>
        <DayAchivement colorA='#000'/>
    </div>
  )
}

export default AppFooter