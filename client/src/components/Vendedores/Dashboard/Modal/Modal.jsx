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
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal({ setOpen }) {
  const [openChild, setOpenChild] = React.useState(false);
  const handleOpen = () => {
    setOpenChild(true);
  };
  const handleClose = () => {
    setOpenChild(false);
    setOpen(false);
    alert("Lead Update");
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className="flex justify-around items-center">
        <Button
          onClick={handleCancel}
          variant="outlined"
          className="text-center bg-black"
          sx={{ color: 'white', background: '#497d96'}}
        >
          close x
        </Button>
        <Button
          onClick={handleOpen}
          variant="contained"
          className="text-center bg-black"
        >
          Save Changes
        </Button>
      </div>
      <Modal
        open={openChild}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 300, backgroundColor: "#39394B"}}>
          <h2 id="child-modal-title" className="text-white">Update Lead!</h2>
          <p id="child-modal-description" className="text-white">
            ¿Seguro quieres guardar los cambios?
          </p>
          <Button onClick={handleClose} sx={{ color: 'white', background: '#497d96'}}>No</Button>
          <Button onClick={handleClose} variant="contained"
          className="text-center bg-black">Yes</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal({ item }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
        <Box sx={{ ...style, width: 510 }}>
          <h2 id="parent-modal-title" className="text-center text-white mb-6">
            {item.name}
          </h2>
          <div className="flex items-center justify-between mt-10">
            <div className="flex items-center justify-center relative">
              <label htmlFor="email" className="mx-5 text-white">
                Email:
              </label>
              <div className=" h-10 relative flex items-center justify-start">
                <label
                  id="parent-modal-description"
                  className="text-white text-start w-64 p-1 px-3 rounded-full text-ellipsis opacity-1 overflow-hidden hover:overflow-visible hover:bg-[#e3e1e1] hover:w-fit hover:text-black z-111 hover:absolute"
                >
                  {/* {item.email} */}
                  juanPerezHernandez@estudiolorenzo.com.essss
                </label>
              </div>
            </div>
            <div>
              <CiEdit
                className="bg-[#6254ff] text-1 text-white w-10 h-8 rounded-md cursor-pointer text-end"
                onClick={handleOpen}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center relative">
              <label htmlFor="email" className="ml-11 mr-5 text-white">
                Ig:
              </label>
              <div className="h-10 relative flex items-center justify-start">
                <label
                  id="parent-modal-description"
                  className="text-white text-start w-64 p-1 px-3 rounded-full text-ellipsis opacity-1 overflow-hidden hover:overflow-visible hover:bg-[#e3e1e1] hover:w-fit hover:text-black z-111 hover:absolute"
                >
                  {/* {item.instagram} */}
                  www.instagram.com/juanPerezHernandez
                </label>
              </div>
            </div>
            <div>
              <CiEdit
                className="bg-[#6254ff] text-1 text-white w-10 h-8 rounded-md cursor-pointer"
                onClick={handleOpen}
              />
            </div>
          </div>

          <div className=" flex items-center justify-between flex-col my-12">
            <div className="mb-5 mt-5">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Status
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className="">
            <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Motivo
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>

            </div>
          </div>

          <div>
            <ChildModal setOpen={setOpen} />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
