import { useState, useEffect } from 'react';
import style from './CorredoresDashboard.module.css';
import Nav from '../../Nav/Nav';

import {
	Card,
	Table,
	TableHead,
	TableRow,
	TableHeaderCell,
	TableBody,
	TableCell,
	Title,
} from '@tremor/react';

import { CiGlobe } from 'react-icons/ci';
import { GrInstagram } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const CorredoresDashboard = ({ lead }) => {
	const [instagram, setInstagram] = useState('');
	const [buttoninstaStates, setButtoninstaStates] = useState(
		lead.map(() => false)
	);

	useEffect(() => {}, [lead]);

	const handleleadClick = (event, index) => {
		const { name, value } = event.target;

		setlead((prevState) => {
			const updatedlead = [...prevState];
			updatedlead[index] = {
				...updatedlead[index],
				[name]: value,
				Nivel: value,
			};
			if (name === 'Instagram') {
				setInstaComplete((prevInstaComplete) => {
					const updatedInstaComplete = [...prevInstaComplete];
					updatedInstaComplete[index] = value.trim() !== '';
					return updatedInstaComplete;
				});
			}
			return updatedlead;
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const jsonData = Object.fromEntries(formData.entries());
		console.log(jsonData); // send this JSON object to your backend
	};

	/* handleweb */
	const handleLinkWeb = (Url) => {
		const webUrl = Url;
		window.open(webUrl, '_blank');
	};

	const handleChange = (value) => {
		setInstagram(value);
	};

	return (
		<>
			<Nav />
			<Card className='w-full h-screen m-5'>
				<div className='flex justify-between items-center m-5'>
					<Title className={style.title}>Dashboard</Title>
					<button
						className={style.buttonAdd}
						onClick={handleSubmit}>
						Send
					</button>
				</div>
				<form onSubmit={handleSubmit}>
					<Table className={style.table}>
						<TableHead className={style.tableHead}>
							<TableRow className={style.tableRow}>
								<TableHeaderCell className='text-start'>
									Invoice Id
								</TableHeaderCell>
								<TableHeaderCell className='text-start'>Name</TableHeaderCell>
								<TableHeaderCell className='text-start'>Web</TableHeaderCell>
								<TableHeaderCell className='text-start'>
									Instagram
								</TableHeaderCell>
								<TableHeaderCell className='text-start'>
									Incidencias
								</TableHeaderCell>
								<TableHeaderCell className='text-start'>Estado</TableHeaderCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{lead.map((item, index) => (
								<TableRow
									key={item._id}
									className={style.tableRow}>
									<TableCell className='text-start'>
										<div className='w-24 p-1 px-3 rounded-full text-ellipsis opacity-1 overflow-hidden hover:overflow-visible hover:bg-[#ffffff] hover:w-fit hover:text-black z-111 hover:absolute'>
											{item._id}
										</div>
									</TableCell>
									<TableCell className='text-start'>{item.name}</TableCell>
									<TableCell className='flex items-center'>
										<Link
											to={item.web}
											target='_blank'>
											<div>
												<CiGlobe className='text-[2rem] text-[#38369E]' />
											</div>
										</Link>
									</TableCell>
									<TableCell className='flex justify-start items-center gap-2'>
										<div>
											<GrInstagram className='text-[2rem] text-[#38369E]' />
										</div>
										<input
											className='bg-[#888891] rounded-full border-2 border-gray-300 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-gray-500'
											value={instagram}
                      id={item._id}
											name='instagram'
											type='text'
											onChange={(event) => handleChange(event.target.value)}
											placeholder='Ingrese el instagram'
										/>
									</TableCell>
									<TableCell className='flex justify-start items-center p-0'>
										<button
											className={
												item.Nivel === '0'
													? style.buttonNivelActive
													: style.buttonNivel
											}
											type='button'
											name={item.level}
											value='0'
											onClick={(event) => handleleadClick(event, index)}>
											0
										</button>
										<button
											className={
												item.Nivel === '1'
													? style.buttonNivelActive
													: style.buttonNivel
											}
											type='button'
											name={item.level}
											value='1'
											onClick={(event) => handleleadClick(event, index)}>
											1
										</button>
										<button
											className={
												item.Nivel === '2'
													? style.buttonNivelActive
													: style.buttonNivel
											}
											type='button'
											name={item.level}
											value='2'
											onClick={(event) => handleleadClick(event, index)}>
											2
										</button>
										<button
											className={
												item.Nivel === 'Incidencia'
													? style.buttonNivelActive
													: style.buttonNivel
											}
											type='button'
											name={item.level}
											value='incidencia'
											onClick={(event) => handleleadClick(event, index)}>
											incidencia
										</button>
									</TableCell>
									<TableCell className='text-start'></TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</form>
			</Card>
		</>
	);
};

export default CorredoresDashboard;
