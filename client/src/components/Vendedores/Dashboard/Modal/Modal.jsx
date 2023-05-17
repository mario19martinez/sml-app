import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import BasicSelect from "../Select/Select";
import {
  CiGlobe,
  CiWarning,
  CiInstagram,
  CiMail,
  CiEdit,
} from "react-icons/ci";

const style = {
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#39394B",
  border: "none",
  boxShadow: 24,
  pt: 4,
  px: 6,
  pb: 4,
};

function ChildModal({ setOpen, SendLeadAlert }) {
  const [openChild, setOpenChild] = React.useState(false);
  const handleOpen = () => {
    setOpenChild(true);
  };
  const handleClose = () => {
    setOpenChild(false);
  };
  const handleUpdate = () => {
    setOpenChild(false);
    setOpen(false);
    SendLeadAlert();
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className="flex justify-around items-center">
        <button
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={handleCancel}
        >
          Close x
        </button>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={handleOpen}
        >
          Save Changes
        </button>
      </div>
      <Modal
        open={openChild}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: 500,
            backgroundColor: "#39394B",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <h2 id="child-modal-title" className="text-white text-center">
            Update the lead?
          </h2>
          <div className="flex justify-around items-center m-5">
            <button
              type="button"
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={handleClose}
            >
              No
            </button>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={handleUpdate}
            >
              Yes
            </button>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
function IncidenceModal({ setOpen, SendIncidenceAlert }) {
  const [openIncidenceChild, setOpenIncidenceChild] = React.useState(false);
  const handleOpen = () => {
    // setOpenChild(true);
  };
  const handleClose = () => {
    setOpenIncidenceChild(false);
  };
  const confirmSendIncidence = () => {
    // setOpenChild(false);
    setOpen(false);
    // SendLeadAlert();
    SendIncidenceAlert();
  };
  const handleCancel = () => {
    // setOpen(false);
  };

  const sendIncidence = () => {
    setOpenIncidenceChild(true);
  };
  return (
    <React.Fragment>
      <div className="flex justify-around items-center">
        <CiWarning
          className="text-[#ffffff] p-0 text-[35px] font-bold cursor-pointer"
          onClick={sendIncidence}
        />
      </div>
      <Modal
        open={openIncidenceChild}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: 500,
            backgroundColor: "#39394B",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <h2 id="child-modal-title" className="text-white text-center mb-5">
            Send Incidence?
          </h2>
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Observation"
            className="bbg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
          <div className="flex justify-around items-center m-5">
            <button
              type="button"
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={handleClose}
            >
              No
            </button>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={confirmSendIncidence}
            >
              Yes
            </button>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal({
  item,
  SendLeadAlert,
  SendIncidenceAlert,
}) {
  const [open, setOpen] = React.useState(false);
  const [disabledState1, setDisabledState1] = React.useState(false);
  const [disabledState2, setDisabledState2] = React.useState(false);
  const [disabledState3, setDisabledState3] = React.useState(false);
  const [statusValue, setStatusValue] = React.useState("sinContactar");

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange1 = () => {
    setDisabledState1(!disabledState1);
  };
  const handleChange2 = () => {
    setDisabledState2(!disabledState2);
  };
  const handleChange3 = () => {
    setDisabledState3(!disabledState3);
  };

  const handleSelectChange = (event) => {
    setStatusValue(event.target.value);
    console.log(statusValue);
  };

  return (
    <div>
      <CiEdit
        className="bg-[#6254ff] text-1 text-white w-10 h-8 rounded-md cursor-pointer"
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 550, borderRadius: 5 }}>
          <h2 id="parent-modal-title" className="text-center text-white mb-6">
            {item.name}
          </h2>
          <div className="flex flex-col">
            <div className="mt-2">
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>

              <input
                type="text"
                id="last_name"
                className="bbg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // placeholder={item.email}
                placeholder={item.email}
                value={item.email}
                required
                disabled
              />
            </div>
            <div className="mt-5">
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Instagram
              </label>
              <input
                type="text"
                id="last_name"
                className="bbg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // placeholder={item.email}
                placeholder={item.instagram}
                value={item.instagram}
                required
                disabled
              />
            </div>
            <div className="mt-5">
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone
              </label>
              <input
                type="text"
                id="last_name"
                className="bbg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // placeholder={item.email}
                placeholder={item.telephone}
                value={item.telephone}
                required
                disabled
              />
              <div className=" w-full flex justify-end items-center mt-3">
                <div className=" bg-[#8d8b0c] text-[#e8e8e9] w-[40px] rounded h-9 text-[35px] drop-shadow-xl hover:bg-[#c94219] ">
                  <IncidenceModal
                    setOpen={setOpen}
                    SendIncidenceAlert={SendIncidenceAlert}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" flex items-center justify-between flex-col mb-10">
            <div className="">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Status
              </label>
              <select
                onChange={handleSelectChange}
                defaultValue={statusValue}
                id="select1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {/* <option selected>Choose a country</option> */}
                <option value="sinContactar">Sin Contactar</option>
                <option value="vendido">Vendido</option>
                <option value="noResponde">No Responde</option>
                <option value="rechazado">Rechazadado</option>
              </select>
            </div>
            {statusValue === "rechazado" && (
              <div className="m-5">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Motivo
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  {/* <option selected>Choose a country</option> */}
                  <option value="US">Sin Dinero</option>
                  <option value="CA">Sin Interes</option>
                  <option value="FR">Otro Servicio</option>
                  {/* <option value="DE">Germany</option> */}
                </select>
              </div>
            )}
            {statusValue === "vendido" && (
              <div className="flex flex-col justify-center items-center mt-5">
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm text-center font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <div className="flex justify-center items-center">
                  <label htmlFor="" className="text-white m-2">
                    USD
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="bbg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-28 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    // placeholder={item.email}
                    placeholder=""
                    // value="USD"
                    required
                  />
                </div>
              </div>
            )}
          </div>

          <div className="">
            <ChildModal setOpen={setOpen} SendLeadAlert={SendLeadAlert} />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
