import './style/App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Error from './components/Error'

function App() {
  return (
    <main>
      <Header />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main> 
  )
}

export default App;