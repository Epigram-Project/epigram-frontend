import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Login from './component/Login'
import Register from './component/Register'
import './App.css'

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="register" element={<Register/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
