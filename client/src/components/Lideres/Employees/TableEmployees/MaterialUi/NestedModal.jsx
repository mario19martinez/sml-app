import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import BasicSelect from "./BasicSelect";
import InputName from "./InputName";
import InputEmail from "./InputEmail";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid #000",
  boxShadow: 24,
  textAlign: "center",
  color: "white",
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        sx={{ marginTop: "2rem" }}
        onClick={handleOpen}
      >
        Create Employ
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: "30%", backgroundColor: "#39394b" }}>
          <h2 id="child-modal-title">Confirm employee creation?</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button sx={{ color: "white" }} onClick={handleClose}>
            Close Child Modal
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal(name, email, employees) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [selectEmployees, setSelectEmployees] = useState("");

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Add Employees
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: "80%", height: "80%", bgcolor: "#39394b" }}>
          <div>
            <div className="flex flex-col gap-5 my-5">
              <h2 id="parent-modal-title">New Employees</h2>
              <p id="parent-modal-description">Employee registration</p>
            </div>
            <form className="flex flex-col items-center justify-center gap-5">
              <InputName name={inputName} setName={setInputName} />
              <InputEmail email={inputEmail} setEmail={setInputEmail} />
              <BasicSelect
                employees={selectEmployees}
                setEmployees={setSelectEmployees}
              />
            </form>
          </div>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}
