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

const CorredoresDashboard = ({lead}) => {
  const [buttonWebStates, setButtonWebStates] = useState(
    lead.map(() => false)
  );
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
      return updatedlead;
    });
  };
  const handleClickWeb = (index) => {
    setButtonWebStates((prevState) => {
      const updatedStates = [...prevState];
      updatedStates[index] = !updatedStates[index];
      return updatedStates;
    });
  };
  const handleClickInsta = (index) => {
    setButtoninstaStates((prevState) => {
      const updated = [...prevState];
      updated[index] = !updated[index];
      return updated;
    });
  };
  const handleClickIncidencia = (index) => {
    setbuttonIncidenciaStates((prevState) => {
      const updatedIncidencia = [...prevState];
      updatedIncidencia[index] = !updatedIncidencia[index];
      return updatedIncidencia;
    });
  };
  const handleClickWebComplete = (index) => {
    setWebComplete((prevState) => {
      const updatedWebComple = [...prevState];
      updatedWebComple[index] = !updatedWebComple[index];
      return updatedWebComple;
    });
  };

  return (
    <>
    <Nav/>
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
            {lead.map((item, index) => (
              <TableRow key={item._id} className={style.tableCards}>
                <TableCell className="flex justify-start items-center p-0">
                  <div className="w-8 ml-2 mr-4 rounded-full">{item._id}</div>
                </TableCell>
                <TableCell className="flex justify-start items-center p-0">
                  <Text className="text-start">
                    <input
                      className={style.inputName}
                      type="text"
                      name="name"
                      value={lead[index].name}
                      onChange={(event) => handleleadClick(event, index)}
                      placeholder="Ingrese el nombre"
                    />
                  </Text>
                </TableCell>

                <TableCell className="flex justify-start items-center p-0">
                  {/* Botón de web */}

                  <button
                    type="button"
                    name={item._id}
                    onClick={() => handleClickWeb(index)}
                  >
                    <CiGlobe
                      className={
                        webComplete[index] ? style.iconComplete : style.icon
                      }
                    />
                  </button>
                  {/* Input de web */}
                  {buttonWebStates[index] && (
                    <div className={style.divInput2}>
                      <input
                        className={style.input}
                        type="text"
                        name="Web"
                        value={lead[index].Web}
                        onChange={(event) => handleleadClick(event, index)}
                        placeholder="Ingrese la url"
                      />
                      <button
                        className={style.bottomInput}
                        type="button"
                        name={item._id}
                        onClick={() => handleClickWeb(index)}
                      >
                        cerrar
                      </button>
                    </div>
                  )}
                  {buttonWebStates[index] && <div className={style.divInput} />}
                </TableCell>

                <TableCell className="flex justify-start items-center p-0 mx-3">
                  <button
                    type="button"
                    name={item._id}
                    onClick={() => handleClickInsta(index)}
                  >
                    <CiInstagram
                      className={
                        instaComplete[index]
                          ? style.iconInstaComplete
                          : style.icon
                      }
                    />
                  </button>
                  {instaComplete[index] && (
                    <Text className="text-start">{item.Instagram}</Text>
                  )}
                  {buttoninstaStates[index] && (
                    <div className={style.divInput2}>
                      <input
                        className={style.input}
                        type="text"
                        name="Instagram"
                        value={lead[index].Instagram}
                        onChange={(event) => handleleadClick(event, index)}
                        placeholder="Ingrese un insta"
                      />
                      <button
                        className={style.bottomInput}
                        type="button"
                        name={item._id}
                        onClick={() => handleClickInsta(index)}
                      >
                        cerrar
                      </button>
                    </div>
                  )}
                  {buttoninstaStates[index] && (
                    <div className={style.divInput} />
                  )}
                </TableCell>

                <TableCell className="flex justify-start items-center p-0">
                  <button
                    className={
                      item.Nivel === "1"
                        ? style.buttonNivelActive
                        : style.buttonNivel
                    }
                    type="button"
                    name={item._id}
                    value="1"
                    onClick={(event) => handleleadClick(event, index)}
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
                    name={item._id}
                    value="2"
                    onClick={(event) => handleleadClick(event, index)}
                  >
                    2
                  </button>
                  <button
                    className={
                      item.Nivel === "3"
                        ? style.buttonNivelActive
                        : style.buttonNivel
                    }
                    type="button"
                    name={item._id}
                    value="3"
                    onClick={(event) => handleleadClick(event, index)}
                  >
                    3
                  </button>
                </TableCell>

                <TableCell className="flex justify-start items-center p-0">
                  <button
                    type="button"
                    name={item._id}
                    onClick={() => handleClickIncidencia(index)}
                  >
                    <CiWarning className={style.icon} />
                  </button>
                  {buttonIncidenciaStates[index] && (
                    <input
                      type="text"
                      name="Incidencia"
                      value={lead[index].Incidencia}
                      onChange={(event) => handleleadClick(event, index)}
                      placeholder="Ingrese un incidencia"
                    />
                  )}
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
