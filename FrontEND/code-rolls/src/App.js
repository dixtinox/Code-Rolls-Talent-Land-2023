import React from 'react';
import './App.css';
import LoginPage from './components/Pages/Login'
import AppFooter from './components/Footer'
import AppHeader from './components/Header'
import Content from './components/Content'

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
      <Content/>
      <AppFooter/>
    </div>
  );
}

export default App;
