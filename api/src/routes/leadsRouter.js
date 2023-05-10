const {Router} = require("express");
const leadsRouter = Router();
const {getAllLeadsHandler} = require("../Handlers/leadsHandlers")

leadsRouter.get("/", getAllLeadsHandler);

module.exports = leadsRouter;
