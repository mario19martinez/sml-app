import "./App.css";
import { Route, Routes } from "react-router-dom";
import Employees from "./views/Employees/Employees.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Employees />} />
      </Routes>
    </div>
  );
}

export default App;
