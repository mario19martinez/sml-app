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
	Text,
	Title,
	Badge,
} from '@tremor/react';

import { CiGlobe, CiWarning, CiInstagram } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const CorredoresDashboard = ({ lead }) => {
	const [buttonWebStates, setButtonWebStates] = useState(lead.map(() => false));
	const [buttoninstaStates, setButtoninstaStates] = useState(
		lead.map(() => false)
	);
	const [buttonIncidenciaStates, setbuttonIncidenciaStates] = useState(
		lead.map(() => false)
	);
	const [webComplete, setWebComplete] = useState(lead.map(() => false));
	const [instaComplete, setInstaComplete] = useState(lead.map(() => false));

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
			if (name === 'Web') {
				setWebComplete((prevWebComplete) => {
					const updatedWebComplete = [...prevWebComplete];
					updatedWebComplete[index] = value.trim() !== '';
					return updatedWebComplete;
				});
			}
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
									<TableCell className='text-start'>{item._id}</TableCell>
									<TableCell className='text-start'>{item.name}</TableCell>
									<TableCell className='text-start'>
										<Link
											to={item.web}
											target='_blank'>
											<div>
												<CiGlobe />
											</div>
										</Link>
									</TableCell>
									<TableCell className='text-start'>
										<input
											value={item.instagram}
											name='instagram'
											type='text'
											placeholder='Ingrese el instagram'></input>
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
