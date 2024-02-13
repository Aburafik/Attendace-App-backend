import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Form/Login';
import Register from './pages/Form/Register';
import Register1 from './pages/Form/Register1';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/submit' element={<Register1 />} />
      <Route path='/' element={<Dashboard />} />
    </Routes>
  );
}

export default App;
