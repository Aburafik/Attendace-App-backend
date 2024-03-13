import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { useState, useEffect } from "react";
import Store from "./store/Store";
import { AppRouters } from "./routes/index";
import Layout from "./components/Layout";

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
          <Layout>
            <AppRouters />
          </Layout>
        </Router>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
