import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./pages/Form/Login";
import Register from "./pages/Form/Register";
import Register1 from "./pages/Form/Register1";
import Dashboard from "./pages/Dashboard";
import { useState, useEffect } from "react";
import Store from "./store/Store";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const savedUser = localStorage.getItem("token");
    if (savedUser) {
      setUser(savedUser);
    }
  }, [user]);

  // Save userdata to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <React.StrictMode>
      <Provider store={Store}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/submit" element={<Register1 />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Router>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
