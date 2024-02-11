import React from 'react'
import { BrowserRouter as router, Routes, Route } from 'react-router-dom'
import Register from '../Components/Forms/Register'
import Register1 from '../Components/Forms/Register1'

const Forms = () => {
  return (
    <Routes>
        <Route path='/regiser' element={<Register />} />
        <Route path='/pass-auth' element={<Register1 />} />
    </Routes>
  )
}

export default Forms