import React from 'react';
import './App.css';
import { Space } from "antd";
import AppFooter from './components/Footer'
import AppHeader from './components/Header'
import Content from './components/Content'
import LoginPage from './components/Login'


import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const user = localStorage.getItem('user');

  if (!user) {
    console.log('Existe usuario')
    return <LoginPage />;
  }
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
