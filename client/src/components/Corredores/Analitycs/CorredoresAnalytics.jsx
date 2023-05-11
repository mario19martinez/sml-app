import { useState, useEffect } from "react";
import style from "./CorredoresAnalytics.module.css";

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

import { CiGlobe, CiWarning, CiInstagram } from "react-icons/ci";

const CorredoresAnlaytics = () => {
  const [client, setClient] = useState([
    {
      id: 1,
      name: '',
      Web: '',
      Instagram: '',
      Nivel: '',
      Incidencia: ''
    },
    {
      id: 2,
      name: '',
      Web: '',
      Instagram: '',
      Nivel: '',
      Incidencia: ''
    },
    {
      id: 3,
      name: '',
      Web: '',
      Instagram: '',
      Nivel: '',
      Incidencia: ''
    },
    {
      id: 4,
      name: '',
      Web: '',
      Instagram: '',
      Nivel: '',
      Incidencia: ''
    },
    {
      id: 5,
      name: '',
      Web: '',
      Instagram: '',
      Nivel: '',
      Incidencia: ''
    },
    {
      id: 6,
      name: '',
      Web: '',
      Instagram: '',
      Nivel: '',
      Incidencia: ''
    },
    {
      id: 7,
      name: '',
      Web: '',
      Instagram: '',
      Nivel: '',
      Incidencia: ''
    },
    {
      id: 8,
      name: '',
      Web: '',
      Instagram: '',
      Nivel: '',
      Incidencia: ''
    },
    {
      id: 9,
      name: '',
      Web: '',
      Instagram: '',
      Nivel: '',
      Incidencia: ''
    },
    {
      id: 10,
      name: '',
      Web: '',
      Instagram: '',
      Nivel: '',
      Incidencia: ''
    }
]);
const [nivel, setNivel] = useState({
  1:'',
  2:'',
  3:'',
  4:'',
  5:'',
  6:'',
  7:'',
  8:'',
  9:'',
  10:''
})
  const data = [
    {
      id: "#876365",
      name: "Social Media Lab",
      Web: "tomasaguilar@gmail.com",
      Instagram: "@social.meadia.lab",
      Nivel: "1 2 3 4 5 6 7 8 9 10 ",

      Incidencia: "...",
    },
    {
      id: "#876366",
      name: "Social Media Lab",
      Web: "tomasaguilar@gmail.com",
      Instagram: "@social.meadia.lab",
      Nivel: "1 2 3",

      Incidencia: "...",
    },
    {
      id: "#876367",
      name: "Social Media Lab",
      Web: "tomasaguilar@gmail.com",
      Instagram: "@social.meadia.lab",
      Nivel: "1 2 3",

      Incidencia: "...",
    },
    {
      id: "#876368",
      name: "Social Media Lab",
      Web: "tomasaguilar@gmail.com",
      Instagram: "@social.meadia.lab",
      Nivel: "1 2 3",

      Incidencia: "...",
    },
    {
      id: "#876369",
      name: "Social Media Lab",
      Web: "tomasaguilar@gmail.com",
      Instagram: "@social.meadia.lab",
      Nivel: "1 2 3",

      Incidencia: "...",
    },
    {
      id: "#876360",
      name: "Social Media Lab",
      Web: "tomasaguilar@gmail.com",
      Instagram: "@social.meadia.lab",
      Nivel: "1 2 3",

      Incidencia: "...",
    },
  ];
  const handleNivelClick = (event) => {
    
    setNivel({...nivel, [event.target.name]: event.target.value});
  };
  const handleSubmit = (event) => {
    event.preventDefault();


  }
  return (
    <Card className="w-4/5 h-screen ">
      <div className="flex justify-between items-center m-5">
        <Title className={style.title}>Dashboard</Title>
        <button className={style.buttonAdd}>Send </button>
      </div>

      <Table className={style.table}>
        <TableHead className={style.tableHead}>
          <TableRow className={style.tableRow}>
            <TableHeaderCell className="text-start">Invoice Id</TableHeaderCell>
            <TableHeaderCell className="text-start">Name</TableHeaderCell>
            <TableHeaderCell className="text-start">
              Web
            </TableHeaderCell>
            <TableHeaderCell className="text-start">Instagram</TableHeaderCell>
            <TableHeaderCell className="text-start">Nivel</TableHeaderCell>
            <TableHeaderCell className="text-start">Incidencia</TableHeaderCell>
          </TableRow>
        </TableHead>
        
        <TableBody className={style.tableBody}>
          {client.map((item,index) => (

            <TableRow key={item.id} className={style.tableCards}>
              <TableCell className="flex justify-start items-center p-0">
                <div className="w-8 ml-2 mr-4 rounded-full">{item.id}</div>
              </TableCell>
              <TableCell className="flex justify-start items-center p-0">
                <Text className="text-start">{item.name}</Text>
              </TableCell>
              <TableCell className="flex justify-start items-center p-0">
                <button><CiGlobe className={style.icon} /></button>
              </TableCell>
              <TableCell className="flex justify-start items-center p-0 mx-3">
                <CiInstagram className={style.iconInsta} />
                <Text className="text-start">{item.Instagram}</Text>
              </TableCell>
              <TableCell className="flex justify-start items-center p-0">
                {nivel == '1' ?
                  <button className={style.buttonNivelActive} type="button" name={client[index].id} value="1"
                    onClick={handleNivelClick}>1</button>
                  : <button className={style.buttonNivel} type="button" name={client[index].id} value="1"
                    onClick={handleNivelClick}>1</button>}
                {nivel == '2' ?
                  <button className={style.buttonNivelActive} type="button" name={client[index].id} value="2"
                    onClick={handleNivelClick}>2</button>
                  : <button className={style.buttonNivel} type="button" name={client[index].id} value="2"
                    onClick={handleNivelClick}>2</button>}
                {nivel == '3' ?
                  <button className={style.buttonNivelActive} type="button" name={client[index].id} value="3"
                    onClick={handleNivelClick}>3</button>
                  : <button className={style.buttonNivel} type="button" name={client[index].id} value="3"
                    onClick={handleNivelClick}>3</button>}
              </TableCell>
              <TableCell className="flex justify-start items-center p-0">
              <button><CiWarning className={style.icon} /></button>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
    </Card>
  );
};

export default CorredoresAnlaytics;

