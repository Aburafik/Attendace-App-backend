import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Register from './Components/Forms/Register';
import Register1 from './Components/Forms/Register1';
import { Link } from 'react-router-dom';
// import Store from './App/Store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/auth-pass' element={<Register1 />} />
        <Route path='/' element={<App />} />
      </Routes>
    </Router>
    {/* <Provider store={Store}>
    </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
