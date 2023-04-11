import React from 'react';
import Plan from '../components-Planes/Plan';
import "bootstrap/dist/css/bootstrap.css";

const Planes = () => {
  return (
    <div className='container-fluid'>
        <div className='row gap-1'>
            <Plan tinte = '#dc8404' nombre = 'Keto Diet' tipo = 'Personal' autor = 'Code Rolls'/>
            <Plan tinte = '#1692b5' nombre = 'Mediterranean Diet' tipo = 'Personal' autor = 'Code Rolls'/>
            <Plan tinte = '#3d952c' nombre = 'Whole30 Diet' tipo = 'Personal' autor = 'Code Rolls'/>
            <Plan tinte = '#2861b6' nombre = 'DASH Diet' tipo = 'Personal' autor = 'Code Rolls'/>
            <Plan tinte = '#dc8404' nombre = 'Paleo Diet' tipo = 'Personal' autor = 'Code Rolls'/>
        </div>
    </div>
  )
}

export default Planes;