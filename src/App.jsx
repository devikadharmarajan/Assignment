import React from 'react'
import './App.css'
import Home from './components/Home'
import NavBar  from './components/NavBar'
import Signup from './components/Signup'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Addmovie from './components/Addmovie'

const App = () => {
  return (
  <> 

  <NavBar/>
  <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/addmovie' element={<Addmovie/>}/>
  </Routes>
  
  
 
  
  
  </>
  )
}

export default App