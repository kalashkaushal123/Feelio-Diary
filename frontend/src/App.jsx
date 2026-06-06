import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



import Root from './root'
import Login from './component/Auth/Login'
import Signup from './component/Auth/Signup'

function App() {

  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Root /> } />
        <Route path="/login"  element={ <Login /> } />
        <Route path="/signup" element={ <Signup /> } />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
