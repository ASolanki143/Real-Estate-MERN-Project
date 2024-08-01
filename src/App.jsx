import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/sign-up' element={<SignUp/>}></Route>
        <Route path='/sign-in' element={<SignIn/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
