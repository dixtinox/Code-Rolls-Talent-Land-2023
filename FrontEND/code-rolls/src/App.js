import React from 'react';
import './App.css';
import { Space } from "antd";
import AppFooter from './components/Footer'
import AppHeader from './components/Header'
import Content from './components/Content'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <AppHeader />
      <Content/>
      <AppFooter/>
    </div>
  );
}

export default App;
