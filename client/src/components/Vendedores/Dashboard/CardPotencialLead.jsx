import style from './CardPotencialLead.module.css';
import {
	Card,
	Table,
	TableHead,
	TableRow,
	TableHeaderCell,
	TableBody,
	TableCell,
	Text,
} from '@tremor/react';
import { CiCalendarDate } from 'react-icons/ci';

export const CardPotencialLead = () => {
	const data = [
		{
			Name: 'Social Media Lab',
			Category: 'Abogado',
			Nivel: 1,
			Thelephone: '+492563627',
			Email: 'arroragaur@gmail.com',
			Status: true,
		},
	];

	return (
		<Card className='h-screen bg-[39394b] w-[40rem]'>
			<Table className={style.table}>
				<TableHead className={style.tableHead}>
					<TableRow className={style.tableRow}>
						<TableHeaderCell className='text-start'>Name</TableHeaderCell>
						<TableHeaderCell className='text-start ml-5'>
							Profesion
						</TableHeaderCell>
						<TableHeaderCell className='text-start ml-5'>Nivel</TableHeaderCell>
						<TableHeaderCell className='text-start ml-5'>Telefono</TableHeaderCell>
						<TableHeaderCell className='text-start ml-5'>Email</TableHeaderCell>
						<TableHeaderCell className='text-start ml-5'>Status</TableHeaderCell>
					</TableRow>
				</TableHead>

				<TableBody className={style.tableBody}>
					{data.map((item) => (
						<TableRow
							key={item.id}
							className={style.tableCards}>
							<TableCell className='flex justify-start items-center p-0'>
								<Text className='text-start'>{item.Name}</Text>
							</TableCell>
							<TableCell className='flex justify-start items-center p-0'>
								<Text className='text-start'>{item.Category}</Text>
							</TableCell>
							<TableCell className='flex justify-start items-center p-0'>
								<Text className='text-start'>{item.Nivel}</Text>
							</TableCell>
							<TableCell className='flex justify-start items-center p-0'>
								<Text className='text-start'>{item.Thelephone}</Text>
							</TableCell>
							<TableCell className='flex justify-start items-center p-0'>
								<Text className='text-start'>{item.Email}</Text>
							</TableCell>
							<TableCell className='flex justify-start items-center p-0'>
								<Text className='text-start'>{item.Status}</Text>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
};
