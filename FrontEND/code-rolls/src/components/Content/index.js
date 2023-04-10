import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppRoutes from '../AppRoutes/index'

const Content = () => {
  return (
    <div className='Content'>
      <AppRoutes/>
    </div>
  )
}

export default Content