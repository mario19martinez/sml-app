import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import { useDispatch, useSelector } from 'react-redux';
import Employees from "./views/Employees/Employees.jsx";
import Analytics from "./views/Analytics/Analytics.jsx";
// import CorredoresAnalytics from "./components/Corredores/Analitycs/CorredoresAnalytics";
import Settings from "./views/Settings/Settings.jsx";
import Login from "./views/Login/Login";
import CorredoresDashboard from "./components/Corredores/Dashboard/CorredoresDashboard";
import Corredores from "./components/Corredores/Corredores";
import DashboardVendedores from "./components/Vendedores/Dashboard/DashboardVendedores";
import AnalyticsSealer from "./components/Vendedores/analytics/VendedoresAnalytics";
import { AnalyticLeader } from "./components/Lideres/Analytic/AnalyticLeader";
import { fetchLead } from "./redux/actions";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  const dispatch = useDispatch();
	const lead = useSelector((state) => state.lead);

	useEffect(() => {
		dispatch(fetchLead());
	}, [dispatch]);

  console.log(lead);
  return (
    <div className="App">
      {location.pathname === "/" && (
        <img
          className="Appimg"
          src="https://cdn.discordapp.com/attachments/1105243107555037294/1106577865698459788/White_Logo_Social_Media_Lab.png"
        />
      )}
      <Routes>
        <Route path="/home" element={<Landing />} />
        <Route path="/" element={<Login />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/employees/employees" element={<Employees />} />
        <Route path="/employees/analytics" element={<AnalyticLeader />} />
        <Route path="/corredores" element={<CorredoresDashboard lead={lead}/>} />
        <Route path="/corredores/analytics" element={<Corredores lead={lead}/>} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/vendedores" element={<DashboardVendedores lead={lead}/>} />
        <Route path="/analyticsSelers" element={<AnalyticsSealer lead={lead}/>} />
      </Routes>
    </div>
  );
}

export default App;
