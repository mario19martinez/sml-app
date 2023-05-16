import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { CiEdit } from "react-icons/ci";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
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

  return (
    <React.Fragment>
      <Button onClick={handleOpen} className="text-center">
        Save Changes
      </Button>
      <Modal
        open={openChild}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Update Lead!</h2>
          <p id="child-modal-description">
            ¿Seguro quieres guardar los cambios?
          </p>
          <Button onClick={handleClose}>Yes</Button>
          <Button onClick={handleClose}>No</Button>
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
        <Box sx={{ ...style, width: 300 }}>
          <h2 id="parent-modal-title" className="text-center">
            {item.name}
          </h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center relative">
              <label htmlFor="email" className="mx-5">
                Email:
              </label>
              <label
                id="parent-modal-description"
                className="text-start w-60 p-1 px-3 rounded-full text-ellipsis opacity-1 overflow-hidden hover:overflow-visible hover:bg-[#e3e1e1] hover:w-fit hover:text-black z-111 hover:absolute"
              >
                {/* {item.email} */}
                www.instagram.com/juanPerez
              </label>
            </div>
            <div>
              <button className="bg-red-500">edit</button>
            </div>
          </div>
   
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between">
              <label htmlFor="email" className="mx-5">
                Instagram:
              </label>
              <p
                id="parent-modal-description"
                className="w-52 p-1 px-3 rounded-full text-ellipsis opacity-1 overflow-hidden hover:overflow-visible hover:bg-[#e3e1e1] hover:w-fit hover:text-black z-111 hover-absolute">
                {/* {item.instagram} */}
                www.instagram.com/juanPerez
              </p>
            </div>
            <div>
              <button className="bg-red-500">edit</button>
            </div>
          </div>

          <ChildModal setOpen={setOpen} />
        </Box>
      </Modal>
    </div>
  );
}
