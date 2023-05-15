import React from "react";
import style from "./Landing.module.css";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Nav from "../../components/Nav/Nav";

function Landing() {
  const { isAuthenticated } = useAuth0();
  const location = useLocation();

  return (
    <div className={style.container}>
      {(isAuthenticated || location.state?.fromLogin) && (
        <>
          <Nav />
          <div className="flex flex-col gap-5">
            <h1>SML VIEWS</h1>
            <Link to="/employees" className={style.linksRoutes}>
              Lider-Dashboard
            </Link>
            <Link to="/employees/employees" className={style.linksRoutes}>
              Lider-Employees
            </Link>
            <Link to="/employees/analytics" className={style.linksRoutes}>
              Lider-Analytics
            </Link>
            <Link to="/corredores" className={style.linksRoutes}>
              Corredores-Dashbord
            </Link>
            <Link to="/corredores/analytics" className={style.linksRoutes}>
              Corredores-Analytics
            </Link>
            <Link to="/corredores" className={style.linksRoutes}>
              Corredores-Dashbord
            </Link>
            <Link to="/corredores/analytics" className={style.linksRoutes}>
              Corredores-Analytics
            </Link>
            <Link to="/analytics" className={style.linksRoutes}>
              Analytics
            </Link>
            <Link to="/vendedores" className={style.linksRoutes}>
              VendedoresDashboard
            </Link>
            <Link to="/vendedores/analytics" className={style.linksRoutes}>
              VendedoresAnalytics
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Landing;
