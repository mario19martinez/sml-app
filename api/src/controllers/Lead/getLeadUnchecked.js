const Lead = require('../../models/Lead');

const getLeadUnchecked = async () => {
	const leadChequed = await Lead.find({
	checked: false,
	});
	return leadChequed;
};

module.exports = getLeadUnchecked;