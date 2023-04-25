import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Error from './components/Error'

function App() {
  return (
    <main>
      <Navbar />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main> 
  )
}

export default App;