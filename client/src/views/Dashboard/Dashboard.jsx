import React from "react";
import Nav from "../../components/Nav/Nav";
import { CardPotencialLead } from "../../components/Vendedores/Dashboard/CardPotencialLead";

function Dashboard() {
  return (
    <div className="flex flex-row w-screen">
      <Nav />
      <div className="">
        <div>Dashboard</div>
        <CardPotencialLead />
      </div>
    </div>
  );
}

export default Dashboard;
