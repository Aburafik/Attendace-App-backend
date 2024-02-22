import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default ProtectedRoutes;
