import React from "react";

function Detail() {
  return (
    <div className="  flex h-screen bg-slate-600  justify-center items-center w-1/4 flex-col  relative">
      <div className=" h-1/4 justify-center items-center text-center flex flex-col">
        <div className=" bg-emerald-700 w-8 h-8 rounded-3xl justify-center items-center flex"></div>
        <h1 className=" font-bold  text-xs/3">Name</h1>
        <h1 className=" font-medium text-xs">Job</h1>
      </div>
      <h1 className=" h-1/4">B</h1>
      <h1 className=" h-2/4">C</h1>
    </div>
  );
}

export default Detail;
