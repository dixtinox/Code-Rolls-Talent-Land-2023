import React from 'react';
import './App.css';
import { Space } from "antd";
import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader'
import Content from './components/Content'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <AppHeader />
      <Space className='SideMenuAndPageContent'>
        <Content/>
      </Space>
      <AppFooter/>
    </div>
  );
}

export default App;
