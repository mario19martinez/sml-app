import React from "react";
import DashboardContract from "../../components/CardPotencialLead/CardPotencialLead";
import Nav from "../../components/Nav/Nav";

function Dashboard() {
  return (
    <div className="flex w-screen">
      <Nav />
      <main>
        <div>Dashboard</div>
        <DashboardContract />
      </main>
    </div>
  );
}

export default Dashboard;
