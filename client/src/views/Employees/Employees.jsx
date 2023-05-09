import React from "react";
import Detail from "../../components/Employees_components/Detail/Detail.jsx";
import Nav from "../../components/Nav/Nav.jsx";
function Employees() {
  return (
    <div className=" flex items-center justify-center  h-screen">
      <Nav />
      <div className="text-black  w-4/5 h-screen items-center">
        <h1 className=" text-black">Title</h1>
      </div>
      <Detail />
    </div>
  );
}

export default Employees;
