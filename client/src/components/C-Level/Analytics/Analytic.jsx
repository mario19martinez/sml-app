import React from "react";
import AnalyticsNumerics from "./AnalyticsNumerics/AnalyticsNumerics";
import Reports from "./Reports/Reports";
import Goals from "./Goals/Goals";
import BestSellers from "./BestSellers/BestSellers";
import { Sales } from "./Sales/Sales";

function Analytic() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex justify-between ">
        <h1 className="text-2xl font-bold text-white">Analytics</h1>
        <select className="w-32 h-12 rounded-lg bg-purple-500 text-white text-center">
          <option className="py-1">2023</option>
        </select>
      </div>
      <div className="flex flex-col justify-between items-center gap-5  ml-10 mb-10">
        <AnalyticsNumerics />
        <div className="flex flex-col gap-5 h-screen">
          <div className="flex gap-5">
            <Reports />
            <Goals />
          </div>
          <div className="flex gap-5 h-[450px]">
            <Sales />
            <BestSellers />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytic;