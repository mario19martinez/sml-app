import React from "react";
import Nav from "../../components/Nav/Nav";
import { CardPotencialLead } from "../../components/Vendedores/Dashboard/CardPotencialLead";

function CorredoresDashboard() {
  return (
    <div className="flex flex-row w-screen">
      <Nav />
      <div className="flex flex-col w-[2000px] items-center">
        <div>CorredoresDashboard</div>
        <CardPotencialLead />
      </div>
    </div>
  );
}

export default CorredoresDashboard;
