const {Router} = require("express");
const EmployeesRouter = Router();
const {getAllEmployeesHandler} = require("../Handlers/employeesHandlers");

EmployeesRouter.get("/", getAllEmployeesHandler);

module.exports = EmployeesRouter;