import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Employees from "./views/Employees/Employees.jsx";
import Nav from "./components/Nav/Nav";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <Nav/>}
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/employees" element={<Employees/>} />
      </Routes>
    </div>
  );
}

export default App;
