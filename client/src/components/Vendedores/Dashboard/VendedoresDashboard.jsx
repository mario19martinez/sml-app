import style from "./VendedoresDashboard.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PaginationOutlined from "../../pagination/PaginationOutlined";
import { getAllLead, getLeadChecked100 } from "../../../redux/actions";
import { SiGooglemaps } from "react-icons/si";
import { AiOutlinePhone, AiTwotonePhone } from "react-icons/ai";
import Modal from "./Modal/Modal";
import { FaRegEdit } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { IoGrid, IoStatsChart } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  CiGlobe,
  CiWarning,
  CiInstagram,
  CiMail,
  CiEdit,
} from "react-icons/ci";
import { AiOutlineSend } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";

import Nav from "../../Nav/Nav";

const VendedoresDashboard = () => {
  const { leadChequed100 } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

  const [pageStyle, setPageStyle] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardXPage, setCardXpage] = useState(10);
  const indexLastCard = currentPage * cardXPage;
  const indexFirstCard = indexLastCard - cardXPage;
  const currentCard = leadChequed100.slice(indexFirstCard, indexLastCard);

  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState("");

  const pages = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getLeadChecked100());
  }, [dispatch]);

  const handleCopyClick = (copyToProps) => {
    navigator.clipboard
      .writeText(copyToProps)
      .then(() => {
        setShowCopiedMessage(true);
        setTimeout(() => setShowCopiedMessage(false), 2000);
      })
      .catch((err) => alert(`Error al copiar: ${err}`));
  };

  const openEditMenu = (index, id) => {
    console.log(index);
    console.log(id);
    setEdit(true);
    setEditIndex(index);
  };
  const sendEdit = () => {
    setEdit(false);
  };
  const mesageAlert = () => {
    toast.success("✔ Lead Update!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <>
      <Nav />

      <div className="flex flex-col justify-between items-center w-screen  z-0">
        {showCopiedMessage && (
          <p className="mt-2 p-3 bg-[#b9b9b978] text-white rounded-md absolute">
            Copiado al portapapeles
          </p>
        )}

        <div className="w-full flex flex-col justify-center items-center">
          <div className={style.divTitle}>
            <h1 className="font-bold text-[#e2e2e2] text-lg mx-5 mt-2">
              Dashboard
            </h1>
            <div className="flex gap-5">
              <Link to={"/vendedores"}>
                <IoGrid className="text-[2rem] text-[#418df0] hover:text-[#3570bd]" />
              </Link>
              <Link className="text-5xl" to={"/vendedores/analytics"}>
                <IoStatsChart className="text-[2rem] text-[#418df0] hover:text-[#3570bd]" />
              </Link>
            </div>
          </div>
          <table className={style.table}>
            <thead className="text-gray-400 text-14 font-thin">
              <tr className={style.tableRow}>
                <th className="text-start">Invoice Id</th>
                <th className="text-start">Name</th>
                <th className="text-start">Profesion</th>
                <th className="text-start">Country</th>
                <th className="text-start">Email</th>
                <th className="text-start">Instagram</th>
                <th className="text-start">Phone</th>
                <th className="text-start">Nivel</th>
                <th className="text-start">Status</th>
                <th className="text-start"></th>
              </tr>
            </thead>

            <tbody className="">
              {currentCard.map((item, index) => (
                <tr key={item._id} className={style.tableCards}>
                  <td className="flex justify-start items-center p-0 w-fit">
                    <div className="w-24 p-1 px-3 rounded-full text-ellipsis text-18 opacity-1 overflow-hidden whitespace-nowrap hover:overflow-visible hover:bg-[#e3e1e1] hover:w-fit hover:text-black z-111 hover:absolute">
                      {item._id}
                    </div>
                  </td>
                  <td className="flex justify-start items-center  p-0 w-fit">
                    <p className="w-52 p-1 px-3 rounded-full text-ellipsis text-18 opacity-1 overflow-hidden whitespace-nowrap hover:overflow-visible hover:bg-[#e3e1e1] hover:w-fit hover:text-black z-111 hover:absolute">
                      {item.name}
                    </p>
                  </td>
                  <td className="flex justify-start items-center p-0 w-fit">
                    <p className="w-40 p-1 px-3 rounded-full text-ellipsis text-18 opacity-1 overflow-hidden whitespace-nowrap hover:overflow-visible hover:bg-[#e3e1e1] hover:w-fit hover:text-black z-111 hover:absolute">
                      {item.category}
                    </p>
                  </td>

                  <td className="flex justify-center items-center p-0 w-fit">
                    <p className="w-24 p-1 px-3 rounded-full text-ellipsis text-18 opacity-1 overflow-hidden whitespace-nowrap hover:overflow-visible hover:bg-[#e3e1e1] hover:w-fit hover:text-black z-111 hover:absolute">
                      {item.province}
                    </p>
                  </td>

                  <td className="flex justify-center items-center p-0 w-fit">
                    {item.email !== "-" ? (
                      <div onClick={() => handleCopyClick(item.email)}>
                        <div className="cursor-pointer">
                          <CiMail className="text-[30px] mr-5 text-[#418df0]" />
                        </div>
                      </div>
                    ) : (
                      <div>
                        <CiMail className="text-[30px] mr-5 text-[#9eabbe]" />
                      </div>
                    )}
                  </td>
                  <td className="flex justify-center items-center p-0 w-fit">
                    {item.instagram ? (
                      <div onClick={() => handleCopyClick(item.instagram)}>
                        <div className="cursor-pointer">
                          <CiInstagram className="text-[30px] mr-5 text-[#ff598b]" />
                        </div>
                      </div>
                    ) : (
                      <div>
                        <CiInstagram className="text-[30px] mr-5 text-[#9eabbe]" />
                      </div>
                    )}
                  </td>
                  <td className="flex justify-start items-center p-0 w-fit">
                    {item.telephone ? (
                      <div onClick={() => handleCopyClick(item.telephone)}>
                        <div className="cursor-pointer">
                          <AiOutlinePhone className="text-[30px] mr-5 text-[#418df0]" />
                        </div>
                      </div>
                    ) : (
                      <div>
                        <AiOutlinePhone className="text-[30px] mr-5 text-[#9eabbe]" />
                      </div>
                    )}
                  </td>
                  <td className="flex justify-start items-center p-0 w-fit">
                    {item.level !== "incidencia" ? (
                      <p className="bg-[#6254ff] text-[#ffffff] w-[40px] rounded h-10 flex items-center justify-center text-[35px] drop-shadow-xl">
                        {item.level}
                      </p>
                    ) : (
                      <p className="bg-[#6254ff] text-[#e8e8e9] w-[40px] rounded h-10 flex items-center justify-center text-[35px] drop-shadow-xl">
                        <CiWarning className="text-[#fdfa3a] p-0 text-[35px] font-bold" />
                      </p>
                    )}
                  </td>
                  <td className="flex justify-start items-start p-0 w-fit">
                    {item.status === "Activo" ? (
                      <p className="bg-[#e95ea3] w-44 h-11 flex justify-center items-center text-white rounded-3xl text-18">
                        {/* bg-[#ff69b4]  */}
                        No contratado
                      </p>
                    ) : (
                      <p className="bg-emerald-400 w-44 h-11 flex justify-center items-center text-[#000000] rounded-3xl text-18">
                        Contratado
                      </p>
                    )}
                  </td>
                  <td className="flex justify-start items-start p-0 w-fit">
                    <Modal item={item} mesageAlert={mesageAlert} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-5">
          <PaginationOutlined
            pageStyle={pageStyle}
            setPageStyle={setPageStyle}
            cardXPage={cardXPage}
            data={leadChequed100}
            pages={pages}
          />
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default VendedoresDashboard;
