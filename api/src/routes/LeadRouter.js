const { Router } = require('express');
const {
	postLeadHandler,
	getAllLeadHandler,
	getLeadUncheckedHandler,
	getLeadCheckedHandler,
	updateLeadHandler,
	getLeadByIdHandler,
	getLeadByNameHandler,
} = require('../Handlers/LeadHandlers');
const LeadRouter = Router();

LeadRouter.get('/', getAllLeadHandler);
LeadRouter.get('/checked', getLeadCheckedHandler);
LeadRouter.get('/unchecked', getLeadUncheckedHandler);
LeadRouter.post('/', postLeadHandler);
LeadRouter.get('/name', getLeadByNameHandler);
LeadRouter.get('/:id', getLeadByIdHandler);
LeadRouter.put('/:id', updateLeadHandler);

module.exports = LeadRouter;
