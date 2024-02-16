import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Form/Login";
import Register from "./pages/Form/Register";
import Register1 from "./pages/Form/Register1";
import Dashboard from "./pages/Dashboard";
import UserContext from "./features/auth/UserContext";
import { useState, useEffect } from "react";

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
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/submit" element={<Register1 />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </React.StrictMode>
  );
}

export default App;
