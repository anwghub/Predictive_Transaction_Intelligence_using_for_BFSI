import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <div>
      
      <div className='min-h-screen bg-[linear-gradient(#2C0F4B,#704E95,#401172)]'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
