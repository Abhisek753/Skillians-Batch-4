import React from 'react'
import { Route, Routes } from 'react-router'
import About from '../pages/About'
import Contact from '../pages/Contact'
import SinglePage from '../pages/SinglePage'
import HomePage from '../pages/HomePage'

const GlobalRoutes = () => {
  return (
    <div>
         <Routes>
           <Route path="about" element={<About />} />
           <Route path="/" element={<HomePage />} />
           <Route path="contact" element={<Contact />} />
           <Route path="contact/:id" element={<SinglePage />} />
       
     </Routes>
    </div>
  )
}

export default GlobalRoutes