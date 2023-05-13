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

  /* data hardcodeada */
  const [client, setClient] = useState([
    {
      id: 1,
      name: "socialmedia",
      Web: "https://www.google.com/",
      Instagram: "",
      Nivel: "",
 
    },
    {
      id: 2,
      name: "socialmedia",
      Web: "https://www.facebook.com/",
      Instagram: "",
      Nivel: "",
 
    },
    {
      id: 3,
      name: "",
      Web: "",
      Instagram: "",
      Nivel: "",

    },
    {
      id: 4,
      name: "",
      Web: "",
      Instagram: "",
      Nivel: "",

    },
    {
      id: 5,
      name: "",
      Web: "",
      Instagram: "",
      Nivel: "",

    },
    {
      id: 6,
      name: "",
      Web: "",
      Instagram: "",
      Nivel: "",

    },
    {
      id: 7,
      name: "",
      Web: "",
      Instagram: "",
      Nivel: "",
 
    },
    {
      id: 8,
      name: "",
      Web: "",
      Instagram: "",
      Nivel: "",

    },
    {
      id: 9,
      name: "",
      Web: "",
      Instagram: "",
      Nivel: "",

    },
    {
      id: 10,
      name: "",
      Web: "",
      Instagram: "",
      Nivel: "",
 
    },
  ]);
  
  const [webComplete, setWebComplete] = useState(client.map(() => false));
  const [instaComplete, setInstaComplete] = useState(client.map(() => false));
  const [formComplete, setFormComplete] = useState(false);

  /* validacion por el momento */
  useEffect(() => { 
    if(client[0].Instagram!='' &&
    (client[0].Nivel=='1'||client[0].Nivel=='0' ||client[0].Nivel=='2'||client[0].Nivel==undefined)&&
    client[1].Instagram!='' &&
    (client[0].Nivel=='1'||client[0].Nivel=='0' ||client[0].Nivel=='2'||client[0].Nivel==undefined)&&
    client[2].Instagram!='' &&
    (client[0].Nivel=='1'||client[0].Nivel=='0' ||client[0].Nivel=='2'||client[0].Nivel==undefined)&&
    client[3].Instagram!='' &&
    (client[0].Nivel=='1'||client[0].Nivel=='0' ||client[0].Nivel=='2'||client[0].Nivel==undefined)&&
    client[4].Instagram!='' &&
    (client[0].Nivel=='1'||client[0].Nivel=='0' ||client[0].Nivel=='2'||client[0].Nivel==undefined)&&
    client[5].Instagram!='' &&
    (client[0].Nivel=='1'||client[0].Nivel=='0' ||client[0].Nivel=='2'||client[0].Nivel==undefined)&&
    client[6].Instagram!='' &&
    (client[0].Nivel=='1'||client[0].Nivel=='0' ||client[0].Nivel=='2'||client[0].Nivel==undefined)&&
    client[7].Instagram!='' &&
    (client[0].Nivel=='1'||client[0].Nivel=='0' ||client[0].Nivel=='2'||client[0].Nivel==undefined)&&
    client[8].Instagram!='' &&
    (client[0].Nivel=='1'||client[0].Nivel=='0' ||client[0].Nivel=='2'||client[0].Nivel==undefined)&&
    client[9].Instagram!='' &&
    (client[0].Nivel=='1'||client[0].Nivel=='0' ||client[0].Nivel=='2'||client[0].Nivel==undefined)){
      setFormComplete(true)
    }else{
      setFormComplete(false)
    }

  }, [client]);

  const handleClientClick = (event, index) => {
    const { name, value } = event.target;

    setClient((prevState) => {
      const updatedClient = [...prevState];
      updatedClient[index] = {
        ...updatedClient[index],
        [name]: value,
        Nivel: value,
      };
      /* este if no lo borren por las dudas si necesitamos ocupar hay que preguntar a martin
      por ahora no funciona */
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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formComplete) {
      //funcion para hacer update
      console.log('mandando info');
    }

  }

  return (
    <>
      <Nav />
      <form onSubmit={handleSubmit}>
      <Card className="w-full h-screen m-5">
        <div className="flex justify-between items-center m-5">
          <Title className={style.title}>Dashboard</Title>

          {/* boton submit */}
          <button type="submit" disabled={!formComplete} complete={formComplete} 
          className={formComplete?style.buttonAdd:style.buttonAddDisable}>Send </button>
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

          {/* aca lee la informacion con un ma utilizando el index para setear el objeto
          en su posicion correspondiente*/}
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
                  {/* Botón de web este boton te llava a otra pagina */}
                      <button class={style.buttonWeb} value={item.Web}
                      onClick={() => handleLinkWeb(item.Web)}>
                        <CiGlobe
                          className={
                            webComplete[index] ? style.iconCompleteWeb : style.iconWeb
                          }/>
                      </button>
                    
                    
                </TableCell>
                  {/* aca esta input de instagram */}
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
                    {/* item.nivel se utiliza para comprobar si esta seleccionado 
                    incidencia o otro nivel */}
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
      </form>
    </>
  );
};

export default CorredoresDashboard;
