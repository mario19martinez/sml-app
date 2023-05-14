const { Router } = require("express");
const {
  postLeadHandler,
  getAllLeadHandler,
  updateLeadHandler,
  getLeadByIdHandler,
  getLeadByNameHandler,
  getLeadCheckedHandler,
  getLeadUncheckedHandler,
  updateMultipleLeadsHandler,
} = require("../Handlers/LeadHandlers");
const LeadRouter = Router();

LeadRouter.get("/", getAllLeadHandler);
LeadRouter.get("/checked", getLeadCheckedHandler);
LeadRouter.get("/unchecked", getLeadUncheckedHandler);
LeadRouter.post("/", postLeadHandler);
LeadRouter.get("/name", getLeadByNameHandler);
LeadRouter.get("/:id", getLeadByIdHandler);
LeadRouter.put("/:id", updateLeadHandler);
LeadRouter.put("/update", updateMultipleLeadsHandler);

module.exports = LeadRouter;
