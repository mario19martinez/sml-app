import React from "react";
import { Bar } from "react-chartjs-2";
//
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

function Detail() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        backgroundColor: "violet",
        borderColor: "violet",
        borderWidth: 1,
        hoverBackgroundColor: "purple",
        hoverBorderColor: "purple",
        data: [100, 233, 260, 245, 300, 320],
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    color: "white",
    scales: {
      x: {
        ticks: {
          color: "white",
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const keyframes = `
    @keyframes fill-progress {
      from {
        stroke-dasharray: 0 100;
      }
      to {
        stroke-dasharray: var(--percent) 100;
      }
    }
  `;

  return (
    <div className="  flex h-screen bg-slate-700  justify-center items-center w-1/5 flex-col  relative">
      {/* ********* ********* ********* ********* ********* ********* TARJETA DE USUARIO ********* ********* ********* *********  ********* ********* */}
      <div className=" h-1/4 justify-center items-center text-center flex flex-col min-w-min gap-2 relative">
        <div className=" bg-emerald-700  w-16 h-16 rounded-full flex " />
        <p className=" font-bold text-24 pt-1 text-white">Nico Fadel</p>
        <p className=" font-light text-14 text-gray-400">
          Developer / FullStack
        </p>
      </div>
      <hr className=" border-gray-400 w-5/6 " />

      {/* ********* ********* ********* ********* ********* *********  INFORMACION DEL USUARIO ********* ********* ********* ********* ********* *********  */}
      <div className=" h-1/4 justify-center items-left text-left flex flex-col w-4/5 relative gap-2">
        <p className=" font-normal text-18 pt-1 text-white">Contact Info</p>
        <div className="flex items-center gap-2 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" w-6 h-6 "
            viewBox="0 0 24 24"
            stroke="white"
            fill="none"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <polyline points="3 7 12 13 21 7" />
          </svg>
          <p className=" font-normal text-14  text-white pt-0">
            Correo@correo.com
          </p>
        </div>
        <hr className=" border-gray-400 w-11/12" />
        <div className="flex  gap-2 text-left items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="min-w-fit h-6 "
            viewBox="0 0 24 24"
            stroke="white"
            fill="none"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
          </svg>
          <p className=" font-normal text-14 pt-0 text-white">
            Telefono 321321332112
          </p>
        </div>
        <hr className=" border-gray-400 w-11/12" />
        <div className="gap-2 text-left flex items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" min-w-fit h-6 "
            viewBox="0 0 24 24"
            stroke="white"
            fill="none"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="11" r="3" />
            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
          </svg>
          <div>
            <p className=" font-normal text-14 pt-0 text-white">
              Direcion 321 das12 sdahiuqhd 333 sadji, 444211
            </p>
          </div>
        </div>
      </div>
      <hr className=" border-gray-400 w-5/6 " />

      {/* ********* ********* ********* ********* ********* ********* GRAFICOS ********* ********* ********* ********* ********* ********* *********  */}
      <div className=" flex flex-col h-2/4 w-full items-center gap-y-2">
        {/* ********* ********* ********* ********* ********* ********* PERFORMANCE ********* ********* ********* ********* ********* ********* ********* */}
        <div className=" w-10/12 h-3/6 border-white border-2">
          <div className="flex h-1/12 items-center justify-between pr-4 pl-2 pt-2">
            <p className=" font-normal text-18 pt-0 text-white">Performance</p>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                stroke="white"
                fill="none"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="19" r="1" />
                <circle cx="12" cy="5" r="1" />
              </svg>
            </button>
          </div>
          <div className="flex h-5/6">
            <Bar data={data} options={options} />
          </div>
        </div>
        <div className=" flex flex-row h-3/6 w-full justify-center gap-x-3">
          {/* ********* ********* ********* ********* ********* ********* CIRCLE 1 ********* ********* ********* ********* ********* ********* *********  */}
          <div
            style={{ "--percent": "70" }}
            className=" flex w-2/5 h-4/6 border-white border-2 relative"
          >
            <style>{keyframes}</style>
            <svg>
              <circle
                r="35%"
                cx="50%"
                cy="50%"
                pathLength="100"
                strokeDasharray="100 100"
                className="fill-none stroke-slate-600 stroke-[10%] "
              ></circle>
              <circle
                r="35%"
                cx="50%"
                cy="50%"
                pathLength="100"
                strokeDasharray="var(--percent) 100"
                className="fill-none stroke-green-300 stroke-[10%] transform -rotate-90 origin-center border-red-600 "
                style={{ animation: "fill-progress 1s ease-out forwards" }}
              ></circle>
            </svg>
            <span className="absolute top-0 bottom-0 left-0 right-0 items-center justify-center flex font-normal text-18 pt-0 text-white">
              70%
            </span>
          </div>

          {/* ********* ********* ********* ********* ********* ********* CIRCLE 2 ********* ********* ********* ********* ********* ********* *********  */}
          <div
            style={{ "--percent": "60" }}
            className=" flex w-2/5 h-4/6 border-white border-2 relative"
          >
            <style>{keyframes}</style>
            <svg>
              <circle
                r="35%"
                cx="50%"
                cy="50%"
                pathLength="100"
                strokeDasharray="100 100"
                className="fill-none stroke-slate-600 stroke-[10%] "
              ></circle>
              <circle
                r="35%"
                cx="50%"
                cy="50%"
                pathLength="100"
                strokeDasharray="var(--percent) 100"
                className="fill-none stroke-blue-600 stroke-[10%] transform -rotate-90 origin-center border-red-600 "
                style={{ animation: "fill-progress 1s ease-out forwards" }}
              ></circle>
            </svg>
            <span className="absolute top-0 bottom-0 left-0 right-0 items-center justify-center flex font-normal text-18 pt-0 text-white">
              60%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
