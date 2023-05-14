import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
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

import { CiGlobe, CiWarning } from 'react-icons/ci';
import { GrInstagram } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { getLeadUnchecked10 } from '../../../redux/actions';

const CorredoresDashboard = () => {
	const [instaComplete, setInstaComplete] = useState([]);
	const [client, setClient] = useState([]);
	const handleClientClick = (event, index) => {
		const { name, value } = event.target;

		setClient((prevState) => {
			const updatedClient = [...prevState];
			updatedClient[index] = {
				...updatedClient[index],
				[name]: value,
				level: value,
			};
			if (name === 'instagram') {
				setInstaComplete((prevInstaComplete) => {
					const updatedInstaComplete = [...prevInstaComplete];
					updatedInstaComplete[index] = value.trim() !== '';
					return updatedInstaComplete;
				});
			}
			return updatedClient;
		});
	};

	const { leadUnchecked10 } = useSelector((state) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getLeadUnchecked10());
	}, [dispatch]);

	useEffect(() => {
		setClient(
			leadUnchecked10.length > 0
				? [
						{
							_id: leadUnchecked10[0]._id,
							name: leadUnchecked10[0].name,
							url: leadUnchecked10[0].url,
							instagram: '',
							level: '0',
							checked: true,
						},
						{
							_id: leadUnchecked10[1]._id,
							name: leadUnchecked10[1].name,
							url: leadUnchecked10[1].url,
							instagram: '',
							level: '0',
							checked: true,
						},
						{
							_id: leadUnchecked10[2]._id,
							name: leadUnchecked10[2].name,
							url: leadUnchecked10[2].url,
							instagram: '',
							level: '0',
							checked: true,
						},
						{
							_id: leadUnchecked10[3]._id,
							name: leadUnchecked10[3].name,
							url: leadUnchecked10[3].url,
							instagram: '',
							level: '0',
							checked: true,
						},
						{
							_id: leadUnchecked10[4]._id,
							name: leadUnchecked10[4].name,
							url: leadUnchecked10[4].url,
							instagram: '',
							level: '0',
							checked: true,
						},
						{
							_id: leadUnchecked10[5]._id,
							name: leadUnchecked10[5].name,
							url: leadUnchecked10[5].url,
							instagram: '',
							level: '0',
							checked: true,
						},
						{
							_id: leadUnchecked10[6]._id,
							name: leadUnchecked10[6].name,
							url: leadUnchecked10[6].url,
							instagram: '',
							level: '',
							checked: true,
						},
						{
							_id: leadUnchecked10[7]._id,
							name: leadUnchecked10[7].name,
							url: leadUnchecked10[7].url,
							instagram: '',
							level: '0',
							checked: true,
						},
						{
							_id: leadUnchecked10[8]._id,
							name: leadUnchecked10[8].name,
							url: leadUnchecked10[8].url,
							instagram: '',
							level: '0',
							checked: true,
						},
						{
							_id: leadUnchecked10[9]._id,
							name: leadUnchecked10[9].name,
							url: leadUnchecked10[9].url,
							instagram: '',
							level: '0',
							checked: true,
						},
				  ]
				: []
		);
	}, [leadUnchecked10]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log('Enviado');
		alert('Enviando Informacion')
		try {
			for (let i = 0; i < leadUnchecked10.length; i++) {
				const response = await axios.put(
					`http://localhost:3001/lead/${client[i]._id}`,
					{
						_id: client[i]._id,
						name: client[i].name,
						url: client[i].url,
						instagram: client[i].instagram,
						level: client[i].level,
						checked: client[i].checked,
					}
				);
				console.log(response.data);
			}
			alert('Solicitud enviada correctamente')
			dispatch(getLeadUnchecked10());
		} catch (error) {
			console.log('No se envio el put');
		}
	};

	console.log(leadUnchecked10);
	return (
		<>
			<Nav />
			<Card className='w-full h-screen m-5'>
				<form onSubmit={handleSubmit}>
					<div className='flex justify-between items-center m-5'>
						<Title className={style.title}>Dashboard</Title>
						<button
							className={style.buttonAdd}
							type='submit'
							onClick={handleSubmit}>
							Send
						</button>
					</div>
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
								<TableHeaderCell className='text-start'>Nivel</TableHeaderCell>
							</TableRow>
						</TableHead>

						<TableBody className={style.tableBody}>
							{client.map((item, index) => (
								<TableRow
									key={item._id}
									className={style.tableCards}>
									<TableCell className='flex justify-start items-center p-0'>
										<div className='w-24 p-1 px-3 rounded-full text-ellipsis opacity-1 overflow-hidden hover:overflow-visible hover:bg-[#ffffff] hover:w-fit hover:text-black z-111 hover:absolute'>
											<div
												type='text'
												id='id'
												value={client[index]._id}>
												<p>{client[index]._id}</p>
											</div>
										</div>
									</TableCell>
									<TableCell className='flex justify-start items-center p-0'>
										<div
											type='text'
											id='name'
											value={client[index].name}>
											<p className='w-96 p-1 px-3 rounded-full text-ellipsis opacity-1 whitespace-nowrap overflow-hidden hover:overflow-visible hover:bg-[#e3e1e1] hover:w-fit hover:text-black z-111 hover:absolute'>
												{client[index].name}
											</p>
										</div>
									</TableCell>

									<TableCell className='flex justify-start items-center p-0'>
										{/* Botón de web */}
										<Link
											to={client[index].url}
											target='_blank'>
											<p value={client[index].url}>
												<CiGlobe className='text-[2rem] text-[#418df0]' />
											</p>
										</Link>
									</TableCell>

									<TableCell className='flex justify-start items-center gap-3 p-0 mx-3'>
										<div>
											<GrInstagram className='text-[2rem] text-[#418df0]' />
										</div>
										<input
											className='bg-[#888891] rounded-full border-2 border-gray-300 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-gray-500'
											type='text'
											name='instagram'
											value={client[index].Instagram}
											onChange={(event) => handleClientClick(event, index)}
											placeholder='Ingrese un insta'
										/>
									</TableCell>

									<TableCell className='flex justify-start items-center p-0'>
										<button
											className={
												item.level === '0'
													? style.buttonNivelActive
													: style.buttonNivel
											}
											type='button'
											name={item._id}
											value='0'
											onClick={(event) => handleClientClick(event, index)}>
											0
										</button>
										<button
											className={
												item.level === '1'
													? style.buttonNivelActive
													: style.buttonNivel
											}
											type='button'
											name={item._id}
											value='1'
											onClick={(event) => handleClientClick(event, index)}>
											1
										</button>
										<button
											className={
												item.level === '2'
													? style.buttonNivelActive
													: style.buttonNivel
											}
											type='button'
											name={item._id}
											value='2'
											onClick={(event) => handleClientClick(event, index)}>
											2
										</button>
										<button
											className={
												item.level === 'incidencia'
													? style.buttonNivelActive
													: style.buttonNivel
											}
											type='button'
											name={item._id}
											value='incidencia'
											onClick={(event) => handleClientClick(event, index)}>
											3
										</button>
									</TableCell>
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
