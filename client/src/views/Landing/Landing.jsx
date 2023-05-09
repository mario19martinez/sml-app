import React from "react";
import style from "./Landing.module.css";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav";

function Employees() {
  return (
    <div className={style.container}>
    <Nav />
      <h1>SML VIEWS</h1>
      <Link to="/employees" className={style.linksRoutes}>
        Employees
      </Link>
      <Link to="/analytics" className={style.linksRoutes}>
        Analytics
      </Link>
      <Link to="/login" className={style.linksRoutes}>
        Login
      </Link>
    </div>
  );
}

export default Employees;
