import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
);

export const options = {
	responsive: true,
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
	labels,
	datasets: [
		{
			fill: true,
			label: 'Dataset 2',
			data: [30, 50, 15, 45, 78, 62, 79],
			borderColor: 'rgb(53, 162, 235)',
			backgroundColor: 'rgb(58,56,146)',
		},
	],
};

function Reports() {
	return (
		<div className='flex flex-col w-[65rem] p-5 h-[40rem] bg-[#39394B] color-[#6d6e80] border border-white'>
			<div className="flex flex-col">
				<div className='flex w-[25rem] items-center justify-between'>
					<h2>Goals</h2>
					<p>...</p>
				</div>
				<Line
					options={options}
					data={data}
				/>
			</div>
		</div>
	);
}

export default Reports;
