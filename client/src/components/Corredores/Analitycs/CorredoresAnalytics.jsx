import { useState, useEffect } from "react";
import style from "./CorredoresAnalytics.module.css";
import Pagination from "../../pagination/Pagination";
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
      id: 1111,
      name: "Juan  Gomez",
      Web: "www.google.com",
      Instagram: "@carlosgomez",
      Nivel: "2",
      Incidencia: "",
    },
    {
      id: 22222,
      name: "Juan Carlos ",
      Web: "www.google.com",
      Instagram: "@carlosgomez",
      Nivel: "2",
      Incidencia: "",
    },
    {
      id: 22222,
      name: "Gabriel Carlos Gomez",
      Web: "www.google.com",
      Instagram: "@carlosgomez",
      Nivel: "2",
      Incidencia: "",
    },
    {
      id: 265542,
      name: "Juan Carlos Gomez",
      Web: "www.google.com",
      Instagram: "@carlosgomez",
      Nivel: "2",
      Incidencia: "",
    },
    {
      id: 223422,
      name: "Pedro Gomez",
      Web: "www.google.com",
      Instagram: "@carlosgomez",
      Nivel: "2",
      Incidencia: "",
    },
    {
      id: 234546,
      name: "Gomez",
      Web: "www.google.com",
      Instagram: "@carlosgomez",
      Nivel: "2",
      Incidencia: "",
    },
    {
      id: 22342,
      name: "Javier Gomes",
      Web: "www.google.com",
      Instagram: "@carlosgomez",
      Nivel: "2",
      Incidencia: "",
    },
    {
      id: 22548722,
      name: "Julio Gomes",
      Web: "www.google.com",
      Instagram: "@carlosgomez",
      Nivel: "2",
      Incidencia: "",
    },
    {
      id: 2222222,
      name: "Juan Carlos Gomez",
      Web: "www.google.com",
      Instagram: "@carlosgomez",
      Nivel: "2",
      Incidencia: "",
    },
    {
      id: 2278922,
      name: "Juan Carlos Gomez",
      Web: "www.google.com",
      Instagram: "@carlosgomez",
      Nivel: "2",
      Incidencia: "",
    },
    {
      id: 2222222,
      name: "Juan Carlos Gomez",
      Web: "www.google.com",
      Instagram: "@carlosgomez",
      Nivel: "2",
      Incidencia: "",
    },
    {
      id: 2232422,
      name: "Julio Gomes",
      Web: "www.google.com",
      Instagram: "@carlosgomez",
      Nivel: "2",
      Incidencia: "",
    },
    {
      id: 2222222,
      name: "Juan Carlos Gomez",
      Web: "www.google.com",
      Instagram: "@carlosgomez",
      Nivel: "2",
      Incidencia: "",
    },
    {
      id: 249872,
      name: "Juan Carlos Gomez",
      Web: "www.google.com",
      Instagram: "@carlosgomez",
      Nivel: "2",
      Incidencia: "",
    },
    {
      id: 2224852,
      name: "Julio Gomes",
      Web: "www.google.com",
      Instagram: "@carlosgomez",
      Nivel: "2",
      Incidencia: "",
    },
    {
      id: 246877,
      name: "Juan Carlos Gomez",
      Web: "www.google.com",
      Instagram: "@carlosgomez",
      Nivel: "2",
      Incidencia: "",
    },
    {
      id: 224562,
      name: "Gonzalo Gomez",
      Web: "www.google.com",
      Instagram: "@carlosgomez",
      Nivel: "2",
      Incidencia: "",
    },
    {
      id: 2222222,
      name: "Juan Carlos Gomez",
      Web: "www.google.com",
      Instagram: "@carlosgomez",
      Nivel: "2",
      Incidencia: "",
    },
    {
      id: 2222222,
      name: "Gonzalo Gomez",
      Web: "www.google.com",
      Instagram: "@carlosgomez",
      Nivel: "2",
      Incidencia: "",
    },
    {
      id: 2222222,
      name: "Nicolas Depecho",
      Web: "www.google.com",
      Instagram: "@carlosgomez",
      Nivel: "2",
      Incidencia: "",
    },
    {
      id: 2222222,
      name: "Juan Carlos Gomez",
      Web: "www.google.com",
      Instagram: "@carlosgomez",
      Nivel: "2",
      Incidencia: "",
    },
    {
      id: 2222222,
      name: "Nicolas Depecho",
      Web: "www.google.com",
      Instagram: "@carlosgomez",
      Nivel: "2",
      Incidencia: "",
    },
    {
      id: 2222222,
      name: "Juan Carlos Gomez",
      Web: "www.google.com",
      Instagram: "@carlosgomez",
      Nivel: "2",
      Incidencia: "",
    },
    {
      id: 2222222,
      name: "Juan Carlos Gomez",
      Web: "www.google.com",
      Instagram: "@carlosgomez",
      Nivel: "2",
      Incidencia: "",
    },
    {
      id: 2222222,
      name: "Ximena Gabriela Tomasini",
      Web: "www.google.com",
      Instagram: "@carlosgomez",
      Nivel: "2",
      Incidencia: "",
    },
    {
      id: 2222222,
      name: "Juan Carlos Gomez",
      Web: "www.google.com",
      Instagram: "@carlosgomez",
      Nivel: "2",
      Incidencia: "",
    },
    {
      id: 2222222,
      name: "Ximena Gabriela Tomasini",
      Web: "www.google.com",
      Instagram: "@carlosgomez",
      Nivel: "2",
      Incidencia: "",
    },
    {
      id: 2222222,
      name: "Juan Carlos Gomez",
      Web: "www.google.com",
      Instagram: "@carlosgomez",
      Nivel: "2",
      Incidencia: "",
    },
    {
      id: 2222222,
      name: "Ximena Gabriela Tomasini",
      Web: "www.google.com",
      Instagram: "@carlosgomez",
      Nivel: "2",
      Incidencia: "",
    },
    {
      id: 2222222,
      name: "Juan Carlos Gomez",
      Web: "www.google.com",
      Instagram: "@carlosgomez",
      Nivel: "2",
      Incidencia: "",
    },

  ]);
  const [nivel, setNivel] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "",
  });
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

  const [pageStyle, setPageStyle] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardXPage, setCardXpage] = useState(10);
  const indexLastCard = currentPage * cardXPage;
  const indexFirstCard = indexLastCard - cardXPage;
  const currentCard = client.slice(indexFirstCard, indexLastCard);

  const pages = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNivelClick = (event) => {
    setNivel({ ...nivel, [event.target.name]: event.target.value });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  if (currentCard.length === 1 && currentCard[0].hasOwnProperty("error")) {
    return <p className={style.noResults}>No hay resultados...</p>;
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
            <TableHeaderCell className="text-start">Web</TableHeaderCell>
            <TableHeaderCell className="text-start">Instagram</TableHeaderCell>
            <TableHeaderCell className="text-start">Nivel</TableHeaderCell>
            <TableHeaderCell className="text-start">Incidencia</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody className={style.tableBody}>
          {currentCard?.map((item, index) => (
            <TableRow key={index} className={style.tableCards}>
              <TableCell className="flex justify-start items-center p-0">
                <div className="w-8 ml-2 mr-4 rounded-full">{item.id}</div>
              </TableCell>
              <TableCell className="flex justify-start items-center p-0">
                <Text className="text-start">{item.name}</Text>
              </TableCell>
              <TableCell className="flex justify-start items-center p-0">
                <button>
                  <CiGlobe className={style.icon} />
                </button>
              </TableCell>
              <TableCell className="flex justify-start items-center p-0 mx-3">
                <CiInstagram className={style.iconInsta} />
                <Text className="text-start">{item.Instagram}</Text>
              </TableCell>
              <TableCell className="flex justify-start items-center p-0">
                {nivel == "1" ? (
                  <button
                    className={style.buttonNivelActive}
                    type="button"
                    name={client[index].id}
                    value="1"
                    onClick={handleNivelClick}
                  >
                    1
                  </button>
                ) : (
                  <button
                    className={style.buttonNivel}
                    type="button"
                    name={client[index].id}
                    value="1"
                    onClick={handleNivelClick}
                  >
                    1
                  </button>
                )}
                {nivel == "2" ? (
                  <button
                    className={style.buttonNivelActive}
                    type="button"
                    name={client[index].id}
                    value="2"
                    onClick={handleNivelClick}
                  >
                    2
                  </button>
                ) : (
                  <button
                    className={style.buttonNivel}
                    type="button"
                    name={client[index].id}
                    value="2"
                    onClick={handleNivelClick}
                  >
                    2
                  </button>
                )}
                {nivel == "3" ? (
                  <button
                    className={style.buttonNivelActive}
                    type="button"
                    name={client[index].id}
                    value="3"
                    onClick={handleNivelClick}
                  >
                    3
                  </button>
                ) : (
                  <button
                    className={style.buttonNivel}
                    type="button"
                    name={client[index].id}
                    value="3"
                    onClick={handleNivelClick}
                  >
                    3
                  </button>
                )}
              </TableCell>
              <TableCell className="flex justify-start items-center p-0">
                <button>
                  <CiWarning className={style.icon} />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
        pageStyle={pageStyle}
        setPageStyle={setPageStyle}
        cardXPage={cardXPage}
        client={client}
        pages={pages}
      />
    </Card>
  );
};

export default CorredoresAnlaytics;
