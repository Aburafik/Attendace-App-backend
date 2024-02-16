import React from 'react';
import './App.css';
// import Forms from './Pages/Forms';
import Register from './Components/Forms/Register';
import Register1 from './Components/Forms/Register1';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div>
      <p>link</p>
      <Link to="/">kd</Link>
    </div>
    // <h1>Hello world</h1>
  );
}

export default App;
