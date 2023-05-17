import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { CiEdit } from "react-icons/ci";
import BasicSelect from "../Select/Select";

const style = {
  position: "absolute",
  top: "50%",
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

function ChildModal({ setOpen, mesageAlert }) {
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
    mesageAlert()
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className="flex justify-around items-center">
      <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={handleCancel}>Close x</button>
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleOpen}>Save Changes</button>
        {/* <Button
          onClick={handleCancel}
          variant="outlined"
          className="text-center bg-black"
          sx={{ color: "white", background: "#497d96" }}
        >
          close x
        </Button>
        <Button
          onClick={handleOpen}
          variant="contained"
          className="text-center bg-black"
        >
          Save Changes
        </Button> */}
      </div>
      <Modal
        open={openChild}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 500, backgroundColor: "#39394B", display:"flex", flexDirection:"column", justifyContent:"center", alignContent: "center" }}>
          <h2 id="child-modal-title" className="text-white text-center">
            Update the lead?
          </h2>
          {/* <p id="child-modal-description" className="text-white">
            ¿Seguro quieres guardar los cambios?
          </p> */}
          <div className="flex justify-around items-center m-5">
          <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={handleClose}>No</button>
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleUpdate}>Yes</button>
          {/* <Button
            onClick={handleClose}
            sx={{ color: "white", background: "#497d96" }}
          >
            No
          </Button>
          <Button
            onClick={handleUpdate}
            variant="contained"
            className="text-center bg-black"
          >
            Yes
          </Button> */}
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal({ item, mesageAlert}) {
  const [open, setOpen] = React.useState(false);
  const [disabledState1, setDisabledState1] = React.useState(false);
  const [disabledState2, setDisabledState2] = React.useState(false);
  const [disabledState3, setDisabledState3] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange1 = () => {
setDisabledState1(!disabledState1)

  }
  const handleChange2 = () => {
setDisabledState2(!disabledState2)

  }
  const handleChange3 = () => {
setDisabledState3(!disabledState3)

  }

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
        <Box sx={{ ...style, width: 550, borderRadius: 5}}>
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
              <div className="flex justify-center items-center">
                {disabledState1 ? (<input
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-dark dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"

                  // placeholder={item.email}
                  required 
                  value={item.email}
                />): (<input
                  type="text"
                  id="last_name"
                  className="bbg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  // placeholder={item.email}
                  placeholder={item.email}
                  required 
                  disabled
                />)}
                
                <CiEdit
                  className="bg-[#6254ff] text-1 text-white w-10 h-8 rounded-md cursor-pointer m-2"
                  onClick={handleChange1}
                />
              </div>
            </div>
            <div className="mt-5">
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Instagram
              </label>
              <div className="flex justify-center items-center">
              {disabledState2 ? (<input
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-dark dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  // placeholder={item.email}
                  // placeholder={item.instagram}
                  required 
                  value={item.instagram}
                />): (<input
                  type="text"
                  id="last_name"
                  className="bbg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  // placeholder={item.email}
                  placeholder={item.instagram}
                  required 
                  disabled
                />)}
                <CiEdit
                  className="bg-[#6254ff] text-1 text-white w-10 h-8 rounded-md cursor-pointer m-2"
                  onClick={handleChange2}
                />
              </div>
            </div>
            <div className="mt-5">
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone
              </label>
              <div className="flex justify-center items-center">
              {disabledState3 ? (<input
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-dark dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  // placeholder={item.email}
                  // placeholder={item.telephone}
                  required 
                  value={item.telephone}
                />): (<input
                  type="text"
                  id="last_name"
                  className="bbg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  // placeholder={item.email}
                  placeholder={item.telephone}
                  required 
                  disabled
                />)}
                <CiEdit
                  className="bg-[#6254ff] text-1 text-white w-10 h-8 rounded-md cursor-pointer m-2"
                  onClick={handleChange3}
                />
              </div>
            </div>
          </div>

          <div className=" flex items-center justify-between flex-col mt-5 mb-10">
            <div className="">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Status
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {/* <option selected>Choose a country</option> */}
                <option value="US">No Responde</option>
                <option value="CA">Vendido</option>
                <option value="FR">Rechazado</option>
                <option value="DE">Sin Contactar</option>
              </select>
            </div>
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
          </div>

          <div className="">
            <ChildModal setOpen={setOpen} mesageAlert={mesageAlert} />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
