import React from 'react';
import './App.css';
import Forms from './Pages/Forms';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<Forms />}/>
      </Routes>
    </Router>
  );
}

export default App;
