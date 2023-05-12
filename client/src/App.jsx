import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Employees from "./views/Employees/Employees.jsx";
import Analytics from "./views/Analytics/Analytics.jsx";
import Settings from "./views/Settings/Settings.jsx";
import Login from "./views/Login/Login";
import Dashboard from "./views/Dashboard/Dashboard";
import AnalyticsSealer from "./components/Vendedores/analytics/VendedoresAnalytics";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Landing />} />
        <Route path="/" element={<Login />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/analyticsSelers" element={<AnalyticsSealer/>} />
      </Routes>
    </div>
  );
}

export default App;
