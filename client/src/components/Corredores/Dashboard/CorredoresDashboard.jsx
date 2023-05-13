import { useState, useEffect } from "react";
import style from "./CorredoresDashboard.module.css";
import Nav from "../../Nav/Nav";

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

const CorredoresDashboard = () => {
  const [client, setClient] = useState([
    {
      id: 1,
      name: "socialmedia",
      Web: "https://www.google.com/",
      Instagram: "",
      Nivel: "",
      Incidencia: "",
    },
    {
      id: 2,
      name: "socialmedia",
      Web: "https://www.facebook.com/",
      Instagram: "",
      Nivel: "",
      Incidencia: "",
    },
    {
      id: 3,
      name: "",
      Web: "",
      Instagram: "",
      Nivel: "",
      Incidencia: "",
    },
    {
      id: 4,
      name: "",
      Web: "",
      Instagram: "",
      Nivel: "",
      Incidencia: "",
    },
    {
      id: 5,
      name: "",
      Web: "",
      Instagram: "",
      Nivel: "",
      Incidencia: "",
    },
    {
      id: 6,
      name: "",
      Web: "",
      Instagram: "",
      Nivel: "",
      Incidencia: "",
    },
    {
      id: 7,
      name: "",
      Web: "",
      Instagram: "",
      Nivel: "",
      Incidencia: "",
    },
    {
      id: 8,
      name: "",
      Web: "",
      Instagram: "",
      Nivel: "",
      Incidencia: "",
    },
    {
      id: 9,
      name: "",
      Web: "",
      Instagram: "",
      Nivel: "",
      Incidencia: "",
    },
    {
      id: 10,
      name: "",
      Web: "",
      Instagram: "",
      Nivel: "",
      Incidencia: "",
    },
  ]);
  
  const [webComplete, setWebComplete] = useState(client.map(() => false));
  const [instaComplete, setInstaComplete] = useState(client.map(() => false));

  useEffect(() => { }, [client]);

  const handleClientClick = (event, index) => {
    const { name, value } = event.target;

    setClient((prevState) => {
      const updatedClient = [...prevState];
      updatedClient[index] = {
        ...updatedClient[index],
        [name]: value,
        Nivel: value,
      };
      if (name === "Web") {
        setWebComplete((prevWebComplete) => {
          const updatedWebComplete = [...prevWebComplete];
          updatedWebComplete[index] = value.trim() !== "";
          return updatedWebComplete;
        });
      }
      if (name === "Instagram") {
        setInstaComplete((prevInstaComplete) => {
          const updatedInstaComplete = [...prevInstaComplete];
          updatedInstaComplete[index] = value.trim() !== "";
          return updatedInstaComplete;
        });
      }
      return updatedClient;
    });
  };

  /* handleweb */
  const handleLinkWeb = (Url) => {
    const webUrl = Url;
    window.open(webUrl, '_blank');
  };

  return (
    <>
      <Nav />
      <Card className="w-full h-screen m-5">
        <div className="flex justify-between items-center m-5">
          <Title className={style.title}>Dashboard</Title>
          <button className={style.buttonAdd}>Send </button>
        </div>

        <Table className={style.table}>
          <TableHead className={style.tableHead}>
            <TableRow className={style.tableRow}>
              <TableHeaderCell className="text-start">
                Invoice Id
              </TableHeaderCell>
              <TableHeaderCell className="text-start">Name</TableHeaderCell>
              <TableHeaderCell className="text-start">Web</TableHeaderCell>
              <TableHeaderCell className="text-start">
                Instagram
              </TableHeaderCell>
              <TableHeaderCell className="text-start">Nivel</TableHeaderCell>
              <TableHeaderCell className="text-start">
                Incidencia
              </TableHeaderCell>
            </TableRow>
          </TableHead>

          <TableBody className={style.tableBody}>
            {client.map((item, index) => (
              <TableRow key={item.id} className={style.tableCards}>
                <TableCell className="flex justify-start items-center p-0">
                  <p className={style.id}>{item.id}</p>
                </TableCell>
                <TableCell className="flex justify-start items-center p-0">
                  <p className={style.name}>{item.name}</p>
                </TableCell>

                <TableCell className="flex justify-start items-center p-0">
                  {/* Botón de web */}
                  
                    
                      <button class={style.buttonWeb} value={item.Web}
                      onClick={() => handleLinkWeb(item.Web)}>
                        <CiGlobe
                          className={
                            webComplete[index] ? style.iconCompleteWeb : style.iconWeb
                          }/>
                      </button>
                    
                    
                </TableCell>

                <TableCell className="flex justify-start items-center p-0 mx-3">
                  <div>
                    <CiInstagram
                      className={
                        instaComplete[index]
                          ? style.iconInstaComplete
                          : style.icon
                      }
                    />
                  </div>
                    <input
                      className={style.input}
                      type="text"
                      name="Instagram"
                      value={client[index].Instagram}
                      onChange={(event) => handleClientClick(event, index)}
                      placeholder="Ingrese un insta"
                    />
                </TableCell>

                <TableCell className="flex justify-start items-center p-0">
                  <button
                    className={
                      item.Nivel === "0"
                        ? style.buttonNivelActive
                        : style.buttonNivel
                    }
                    type="button"
                    name={item.id}
                    value="0"
                    onClick={(event) => handleClientClick(event, index)}
                  >
                    0
                  </button>
                  <button
                    className={
                      item.Nivel === "1"
                        ? style.buttonNivelActive
                        : style.buttonNivel
                    }
                    type="button"
                    name={item.id}
                    value="1"
                    onClick={(event) => handleClientClick(event, index)}
                  >
                    1
                  </button>
                  <button
                    className={
                      item.Nivel === "2"
                        ? style.buttonNivelActive
                        : style.buttonNivel
                    }
                    type="button"
                    name={item.id}
                    value="2"
                    onClick={(event) => handleClientClick(event, index)}
                  >
                    2
                  </button>
                </TableCell>

                <TableCell className="flex justify-start items-center p-0">
                  <button

                    type="button"
                    name={item.id}
                    value="incidencia"
                    onClick={(event) => handleClientClick(event, index)}
                  >
                    <CiWarning className={
                      (item.Nivel == undefined)
                        ? style.iconComplete
                        : style.icon
                    } />
                  </button>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </>
  );
};

export default CorredoresDashboard;
