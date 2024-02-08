import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Form/Login';
import Register from './pages/Form/Register';
import Register1 from './pages/Form/Register1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/submit' element={<Register1 />} />
      </Routes>
    </Router>
  );
}

export default App;
