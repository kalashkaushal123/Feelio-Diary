import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



import Root from './root'
import Login from './component/Auth/Login'
import Signup from './component/Auth/Signup'
import Home from './component/Home/Home'
import Sidebar from './component/Home/Sidebar'
import Mood from './component/Home/Mood'
import DiaryOpt from './component/pages/DiaryOpt'
import Page1 from './component/pages/Page1'
import Page2 from './component/pages/Page2'
import Page3 from './component/pages/Page3'
import PrevPage from './component/pages/PrevPage'
// import TodyaDiary from './component/Home/TodyaDiary'

function App() {

  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Root /> } />
        <Route path="/login"  element={ <Login /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path='/home' element={ <Home /> } />
        <Route path='/diaryopt' element={ <DiaryOpt /> } />
        <Route path='/page1' element={ <Page1 /> } />
        <Route path='/page2' element={ <Page2 /> } />
        <Route path='/page3' element={ <Page3 /> } />
        <Route path='/prevpage/:id' element={ <PrevPage /> } />
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
