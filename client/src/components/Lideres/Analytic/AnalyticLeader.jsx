import style from "./TableEmployees.module.css";
import { StatusOnlineIcon } from "@heroicons/react/outline";
import PaginationOutlined from "../../pagination/PaginationOutlined";
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
import { CiMail, CiInstagram, CiPhone } from "react-icons/ci";
import Nav from "../../Nav/Nav";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLeadChecked, orderClients } from "../../../redux/actions";
//
export const AnalyticLeader = () => {
  const [data, setData] = useState([]);
  const { leaderDashboard } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLeadChecked());
  }, [dispatch]);

  useEffect(() => {
    console.log(leaderDashboard);
    setData(leaderDashboard);
  }, [leaderDashboard]);

  const [pageStyle, setPageStyle] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardXPage, setCardXpage] = useState(10);
  const indexLastCard = currentPage * cardXPage;
  const indexFirstCard = indexLastCard - cardXPage;
  const currentCard = data.slice(indexFirstCard, indexLastCard);
  const pages = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const [clientOrder, setClientOrder] = useState("");

  const headerClient = () => {
    if (clientOrder === "ASC") {
      return "Cliente ⤴";
    } else if (clientOrder === "DES") {
      return "Cliente ⤵";
    } else {
      return "Cliente";
    }
  };
  const handleOrderByClient = () => {
    if (clientOrder === "ASC" || clientOrder === "") {
      setClientOrder("DES");
      dispatch(orderClients(clientOrder));
      setData(leaderDashboard);
    } else {
      setClientOrder("ASC");
      dispatch(orderClients(clientOrder));
      setData(leaderDashboard);
    }
  };

  return (
    <>
      <Nav />
      <div className="w-full h-screen flex flex-col">
        <Card className="w-full h-full bg-[#222131] rounded-none p-5">
          <div className="flex justify-between items-center mx-5">
            <Title className={style.title}>Analisis</Title>
            <button className="bg-gray-700 w-fit h-fit p-2 rounded-md">
              Agregar Clientes
            </button>
          </div>
          <Table>
            <TableHead className="text-gray-300 text-14 font-thin">
              <TableRow className="flex items-center justify-around p-3 ">
                <TableHeaderCell className="flex justify-center items-center p-0">
                  <Text className="text-start w-8 p-0">ID</Text>
                </TableHeaderCell>
                <TableHeaderCell className="flex justify-center items-center p-0">
                  <button onClick={() => handleOrderByClient()}>
                    <Text className="text-center w-28 p-0">
                      {headerClient()}
                    </Text>
                  </button>
                </TableHeaderCell>
                <TableHeaderCell className="flex justify-center items-center p-0">
                  <Text className="text-center w-28 p-0">Profesion</Text>
                </TableHeaderCell>
                <TableHeaderCell className="flex justify-center items-center p-0">
                  <Text className="text-center w-6 p-0">Nivel</Text>
                </TableHeaderCell>
                <TableHeaderCell className="flex justify-center items-center p-0">
                  <Text className="text-center w-6 p-0">Email</Text>
                </TableHeaderCell>
                <TableHeaderCell className="flex justify-center items-center p-0">
                  <Text className="text-center w-6 p-0">Instagram</Text>
                </TableHeaderCell>
                <TableHeaderCell className="flex justify-center items-center p-0">
                  <Text className="text-center w-6 p-0">Telefono</Text>
                </TableHeaderCell>
                <TableHeaderCell className="flex justify-center items-center p-0">
                  <Text className="text-center w-28 p-0">Corredor</Text>
                </TableHeaderCell>
                <TableHeaderCell className="flex justify-center items-center p-0">
                  <Text className="text-center w-28 p-0">Vendedor</Text>
                </TableHeaderCell>
                <TableHeaderCell className="flex justify-center items-center p-0">
                  <Text className="text-center w-48 p-0">Estado</Text>
                </TableHeaderCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {currentCard.map((item) => (
                <TableRow
                  key={item._id}
                  className="flex items-center justify-around bg-gray-700 text-gray-400 text-sm p-3 rounded-lg h-14 my-5"
                >
                  <TableCell className="flex justify-center items-center p-0  ">
                    <div className="text-ellipsis w-8  flex justify-start items-center p-0">
                      <Text className=" opacity-1 overflow-hidden hover:overflow-visible  hover:bg-[#ffffff] hover:w-fit hover:text-black z-111 hover:absolute ">
                        {item._id}
                      </Text>
                    </div>
                  </TableCell>
                  <TableCell className="flex justify-center items-center p-0 ">
                    <div className="w-28 text-ellipsis  flex justify-start items-center p-0">
                      <Text className=" opacity-1 overflow-hidden hover:overflow-visible hover:bg-[#ffffff] hover:w-fit hover:text-black z-111 hover:absolute">
                        {item.name}
                      </Text>
                    </div>
                  </TableCell>
                  <TableCell className="flex justify-center items-center p-0">
                    <div className="w-28 text-ellipsis  flex justify-start items-center p-0 ">
                      <Text className=" opacity-1 overflow-hidden hover:overflow-visible hover:bg-[#ffffff] hover:w-fit hover:text-black z-111 hover:absolute">
                        {item.category}
                      </Text>
                    </div>
                  </TableCell>
                  <TableCell className="flex justify-center items-center p-0">
                    <div className="flex w-6 text-ellipsis justify-start items-center p-0 ">
                      <Text className=" opacity-1 overflow-hidden hover:overflow-visible hover:bg-[#ffffff] hover:w-fit hover:text-black z-111 hover:absolute">
                        {item.level}
                      </Text>
                    </div>
                  </TableCell>
                  <TableCell className="flex justify-center items-center p-0 ">
                    <div className="flex w-6 text-ellipsis justify-start items-center p-0 ">
                      {item.email !== "-" ? (
                        <div className=" flex opacity-1 overflow-hidden hover:overflow-visible hover:bg-[#ffffff] hover:w-fit hover:text-black z-111 hover:absolute">
                          <div>
                            <CiMail className={style.mail} />
                          </div>
                          <Text>{item.email}</Text>
                        </div>
                      ) : (
                        <div>
                          <CiMail className={style.notMail} />
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="flex justify-center items-center p-0 ">
                    <div className="flex w-6 text-ellipsis justify-start items-center p-0 ">
                      {item.instagram !== "" ? (
                        <div className=" flex opacity-1 overflow-hidden hover:overflow-visible hover:bg-[#ffffff] hover:w-fit hover:text-black z-111 hover:absolute">
                          <div>
                            <CiInstagram className={style.mail} />
                          </div>
                          <Text>{item.instagram}</Text>
                        </div>
                      ) : (
                        <div>
                          <CiInstagram className={style.notMail} />
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="flex justify-center items-center p-0 ">
                    <div className="flex w-6 text-ellipsis justify-start items-center p-0 ">
                      {item.telephone !== "-" ? (
                        <div className=" flex opacity-1 overflow-hidden hover:overflow-visible hover:bg-[#ffffff] hover:w-fit hover:text-black z-111 hover:absolute">
                          <div>
                            <CiPhone className={style.mail} />
                          </div>
                          <Text>{item.telephone}</Text>
                        </div>
                      ) : (
                        <div>
                          <CiPhone className={style.notMail} />
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="flex justify-center items-center p-0 ">
                    <div className="w-28 text-ellipsis  flex justify-start items-center p-0">
                      <Text className=" opacity-1 overflow-hidden hover:overflow-visible hover:bg-[#ffffff] hover:w-fit hover:text-black z-111 hover:absolute">
                        Nombre del Corredor
                      </Text>
                    </div>
                  </TableCell>
                  <TableCell className="flex justify-center items-center p-0 ">
                    <div className="w-28 text-ellipsis  flex justify-start items-center p-0">
                      <Text className=" opacity-1 overflow-hidden hover:overflow-visible hover:bg-[#ffffff] hover:w-fit hover:text-black z-111 hover:absolute">
                        Nombre del Vendedor
                      </Text>
                    </div>
                  </TableCell>
                  <TableCell className="flex justify-center items-center p-0">
                    {item.status ? (
                      <Text className="bg-[#26af7f]  text-[#1f1e1e]   px-2 py-1.5 rounded-xl text-center w-48">
                        Contactado
                      </Text>
                    ) : (
                      <Text className="bg-[#b44f82] text-[#e0dfdf] w-full px-2 py-1.5 rounded-xl text-center">
                        No Contactado
                      </Text>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <PaginationOutlined
            pageStyle={pageStyle}
            setPageStyle={setPageStyle}
            cardXPage={cardXPage}
            data={data}
            pages={pages}
          />
        </Card>
      </div>
    </>
  );
};
