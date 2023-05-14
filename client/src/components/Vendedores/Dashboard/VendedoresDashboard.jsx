import style from "./VendedoresDashboard.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PaginationOutlined from "../../pagination/PaginationOutlined";
import { getAllLead } from "../../../redux/actions";
import { SiGooglemaps } from "react-icons/si";
import { AiOutlinePhone, AiTwotonePhone } from "react-icons/ai";
import { CiGlobe, CiWarning, CiInstagram, CiMail } from "react-icons/ci";
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
} from "@tremor/react";

import Nav from "../../Nav/Nav";

const VendedoresDashboard = () => {
  const { lead } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [pageStyle, setPageStyle] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardXPage, setCardXpage] = useState(10);
  const indexLastCard = currentPage * cardXPage;
  const indexFirstCard = indexLastCard - cardXPage;
  const currentCard = lead.slice(indexFirstCard, indexLastCard);

  const pages = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllLead());
  }, [dispatch]);

  return (
    <>
      <Nav />
      <div className="flex flex-col justify-start items-center w-full h-screen mx-5">
        <Card className="w-full m-5 h-screen ">
          <div className="flex justify-between items-center mt-2 mx-5 ">
            <Title className="font-bold text-[#e2e2e2] text-lg">Dashboard</Title>
            <button className={style.buttonAdd}>Send </button>
          </div>

          <Table className="flex">
            <TableHead className="text-gray-400 text-14 font-thin">
              <TableRow className={style.tableRow}>
                <TableHeaderCell className="text-start">
                  Invoice Id
                </TableHeaderCell>
                <TableHeaderCell className="text-start">Name</TableHeaderCell>
                <TableHeaderCell className="text-start">
                  Phone
                </TableHeaderCell>
                <TableHeaderCell className="text-start">Email</TableHeaderCell>
                <TableHeaderCell className="text-start">
                  Adress
                </TableHeaderCell>
                <TableHeaderCell className="text-start">
                  Instagram
                </TableHeaderCell>
                <TableHeaderCell className="text-start">Nivel</TableHeaderCell>
                <TableHeaderCell className="text-start">Status</TableHeaderCell>
              </TableRow>
            </TableHead>

            <TableBody className={style.tableBody}>
              {currentCard.map((item, index) => (
                <TableRow key={item._id} className={style.tableCards}>
                  <TableCell className="flex justify-start items-center p-0">
                    <div className="w-24 p-1 px-3 rounded-full text-ellipsis opacity-1 overflow-hidden hover:overflow-visible hover:bg-[#e3e1e1] hover:w-fit hover:text-black z-111 hover:absolute">{item._id}</div>
                  </TableCell>
                  <TableCell className="flex justify-start items-center  p-0">
                    <Text className="w-96 p-1 px-3 rounded-full text-ellipsis opacity-1 overflow-hidden hover:overflow-visible hover:bg-[#e3e1e1] hover:w-fit hover:text-black z-111 hover:absolute">{item.name}</Text>
                  </TableCell>
                  <TableCell className="flex justify-start items-center p-0">
                  <AiOutlinePhone className="border-2 border-[#418df0] rounded-md text-18 w-6 h-6 text-[#418df0]" />
                  </TableCell>
                  <TableCell className="flex justify-start items-center p-0">
                    <CiMail className="rounded-md text-[28px] text-[#3e91ff]"/>
                  </TableCell>
                  <TableCell className="flex justify-start items-center p-0">
    
                  <SiGooglemaps className="rounded-md text-24 text-[#418df0]"/>
                  </TableCell>
                  <TableCell className="flex justify-start items-center p-0">
                    <CiInstagram className="rounded-md text-[28px] text-[#3d90fd]"/>
                  </TableCell>
                  <TableCell className="flex justify-start items-center p-0 mx-3">
                    <Text className="text-start bg-[#6254ff] py-2 px-3 text-xl rounded-md">
                      {item.level}
                    </Text>
                  </TableCell>
                  <TableCell className="flex justify-start items-start p-0">
                    <button className="bg-[#ff69b4] rounded-3xl px-6 py-1">
                      Contratado
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
        <div className="">
          <PaginationOutlined
            pageStyle={pageStyle}
            setPageStyle={setPageStyle}
            cardXPage={cardXPage}
            data={lead}
            pages={pages}
          />
        </div>
      </div>
    </>
  );
};

export default VendedoresDashboard;

// import { useState, useEffect } from 'react';
// import style from './DashboardVendedores.module.css';

// import {
// 	Card,
// 	Table,
// 	TableHead,
// 	TableRow,
// 	TableHeaderCell,
// 	TableBody,
// 	TableCell,
// 	Text,
// 	Title,
// 	Badge,
// } from '@tremor/react';

// import { CiGlobe, CiWarning, CiInstagram } from 'react-icons/ci';
// import Nav from '../../Nav/Nav';

// const DashboardVendedores = () => {
// 	const [client, setClient] = useState([
// 		{
// 			InvoiceId: 2222222,
// 			Name: 'Juan Carlos Gomez',
// 			Profesion: 'www.google.com',
// 			Nivel: 1,
// 			Telephone: '+22131234',
// 			Email: 'Hola@gmail.com',
// 			Status: 'Contratado',
// 		},
// 		{
// 			InvoiceId: 2222222,
// 			Name: 'Juan Carlos Gomez',
// 			Profesion: 'www.google.com',
// 			Nivel: 1,
// 			Telephone: '+22131234',
// 			Email: 'Hola@gmail.com',
// 			Status: 'Contratado',
// 		},
// 		{
// 			InvoiceId: 2222222,
// 			Name: 'Juan Carlos Gomez',
// 			Profesion: 'www.google.com',
// 			Nivel: 1,
// 			Telephone: '+22131234',
// 			Email: 'Hola@gmail.com',
// 			Status: 'Contratado',
// 		},
// 		{
// 			InvoiceId: 2222222,
// 			Name: 'Juan Carlos Gomez',
// 			Profesion: 'www.google.com',
// 			Nivel: 1,
// 			Telephone: '+22131234',
// 			Email: 'Hola@gmail.com',
// 			Status: 'Contratado',
// 		},
// 		{
// 			InvoiceId: 2222222,
// 			Name: 'Juan Carlos Gomez',
// 			Profesion: 'www.google.com',
// 			Nivel: 1,
// 			Telephone: '+22131234',
// 			Email: 'Hola@gmail.com',
// 			Status: 'Contratado',
// 		},
// 		{
// 			InvoiceId: 2222222,
// 			Name: 'Juan Carlos Gomez',
// 			Profesion: 'www.google.com',
// 			Nivel: 1,
// 			Telephone: '+22131234',
// 			Email: 'Hola@gmail.com',
// 			Status: 'Contratado',
// 		},
// 		{
// 			InvoiceId: 2222222,
// 			Name: 'Juan Carlos Gomez',
// 			Profesion: 'www.google.com',
// 			Nivel: 1,
// 			Telephone: '+22131234',
// 			Email: 'Hola@gmail.com',
// 			Status: 'Contratado',
// 		},
// 		{
// 			InvoiceId: 2222222,
// 			Name: 'Juan Carlos Gomez',
// 			Profesion: 'www.google.com',
// 			Nivel: 1,
// 			Telephone: '+22131234',
// 			Email: 'Hola@gmail.com',
// 			Status: 'Contratado',
// 		},
// 		{
// 			InvoiceId: 2222222,
// 			Name: 'Juan Carlos Gomez',
// 			Profesion: 'www.google.com',
// 			Nivel: 1,
// 			Telephone: '+22131234',
// 			Email: 'Hola@gmail.com',
// 			Status: 'Contratado',
// 		},
// 		{
// 			InvoiceId: 2222222,
// 			Name: 'Juan Carlos Gomez',
// 			Profesion: 'www.google.com',
// 			Nivel: 1,
// 			Telephone: '+22131234',
// 			Email: 'Hola@gmail.com',
// 			Status: 'Contratado',
// 		},
// 	]);
// 	const [nivel, setNivel] = useState({
// 		1: '',
// 		2: '',
// 		3: '',
// 		4: '',
// 		5: '',
// 		6: '',
// 		7: '',
// 		8: '',
// 		9: '',
// 		10: '',
// 	});
// 	const data = [
// 		{
// 			InvoiceId: 2222222,
// 			Name: 'Juan Carlos Gomez',
// 			Profesion: 'www.google.com',
// 			Nivel: 1,
// 			Telephone: '+22131234',
// 			Email: 'Hola@gmail.com',
// 			Status: 'Contratado',
// 		},
// 		{
// 			InvoiceId: 2222222,
// 			Name: 'Juan Carlos Gomez',
// 			Profesion: 'www.google.com',
// 			Nivel: 1,
// 			Telephone: '+22131234',
// 			Email: 'Hola@gmail.com',
// 			Status: 'Contratado',
// 		},
// 		{
// 			InvoiceId: 2222222,
// 			Name: 'Juan Carlos Gomez',
// 			Profesion: 'www.google.com',
// 			Nivel: 1,
// 			Telephone: '+22131234',
// 			Email: 'Hola@gmail.com',
// 			Status: 'Contratado',
// 		},
// 		{
// 			InvoiceId: 2222222,
// 			Name: 'Juan Carlos Gomez',
// 			Profesion: 'www.google.com',
// 			Nivel: 1,
// 			Telephone: '+22131234',
// 			Email: 'Hola@gmail.com',
// 			Status: 'Contratado',
// 		},
// 		{
// 			InvoiceId: 2222222,
// 			Name: 'Juan Carlos Gomez',
// 			Profesion: 'www.google.com',
// 			Nivel: 1,
// 			Telephone: '+22131234',
// 			Email: 'Hola@gmail.com',
// 			Status: 'Contratado',
// 		},
// 		{
// 			InvoiceId: 2222222,
// 			Name: 'Juan Carlos Gomez',
// 			Profesion: 'www.google.com',
// 			Nivel: 1,
// 			Telephone: '+22131234',
// 			Email: 'Hola@gmail.com',
// 			Status: 'Contratado',
// 		},
// 	];
// 	const handleNivelClick = (event) => {
// 		setNivel({ ...nivel, [event.target.name]: event.target.value });
// 	};
// 	const handleSubmit = (event) => {
// 		event.preventDefault();
// 	};
// 	return (
// 		<div className='flex flex-row w-screen'>
// 			<Nav />
// 			<Card className='w-full m-5 h-screen '>
// 				<div className='flex justify-between items-center m-5'>
// 					<Title className={style.title}>Dashboard</Title>
// 					<button className={style.buttonAdd}>Send </button>
// 				</div>

// 				<Table className={style.table}>
// 					<TableHead className={style.tableHead}>
// 						<TableRow className={style.tableRow}>
// 							<TableHeaderCell className='text-start'>
// 								Invoice Id
// 							</TableHeaderCell>
// 							<TableHeaderCell className='text-start'>Name</TableHeaderCell>
// 							<TableHeaderCell className='text-start'>
// 								Profesion
// 							</TableHeaderCell>
// 							<TableHeaderCell className='text-start'>Nivel</TableHeaderCell>
// 							<TableHeaderCell className='text-start'>
// 								Telephone
// 							</TableHeaderCell>
// 							<TableHeaderCell className='text-start'>Email</TableHeaderCell>
// 							<TableHeaderCell className='text-start'>Status</TableHeaderCell>
// 						</TableRow>
// 					</TableHead>

// 					<TableBody className={style.tableBody}>
// 						{client.map((item, index) => (
// 							<TableRow
// 								key={item.InvoiceId}
// 								className={style.tableCards}>
// 								<TableCell className='flex justify-start items-center p-0'>
// 									<div className='w-8 ml-2 mr-4 rounded-full'>
// 										{item.InvoiceId}
// 									</div>
// 								</TableCell>
// 								<TableCell className='flex justify-start items-center p-0'>
// 									<Text className='text-start'>{item.Name}</Text>
// 								</TableCell>
// 								<TableCell className='flex justify-start items-center p-0'>
// 									<Text className='text-start'>{item.Profesion}</Text>
// 								</TableCell>
// 								<TableCell className='flex justify-start items-center p-0 mx-3'>
// 									<Text className='text-start bg-[#6254ff] py-2 px-3 text-xl rounded-md'>
// 										{item.Nivel}
// 									</Text>
// 								</TableCell>
// 								<TableCell className='flex justify-start items-center p-0'>
// 									<Text className='text-start'>{item.Telephone}</Text>
// 								</TableCell>
// 								<TableCell className='flex justify-start items-center p-0'>
// 									<Text className='text-start'>{item.Email}</Text>
// 								</TableCell>
// 								<TableCell className='flex justify-start items-start p-0'>
// 									<button className='bg-[#ff69b4] rounded-3xl px-6 py-1'>
// 										Contratado
// 									</button>
// 								</TableCell>
// 							</TableRow>
// 						))}
// 					</TableBody>
// 				</Table>
// 			</Card>
// 		</div>
// 	);
// };

// export default DashboardVendedores;
