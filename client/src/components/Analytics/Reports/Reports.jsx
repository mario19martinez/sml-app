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
		<div className='flex w-[30rem] bg-[#39394B] color-[#6d6e80] border border-white'>
			<Line
				options={options}
				data={data}
			/>
		</div>
	);
}

export default Reports;
