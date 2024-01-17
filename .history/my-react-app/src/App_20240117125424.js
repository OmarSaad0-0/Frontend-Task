import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Crud App/Home.js'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )

}