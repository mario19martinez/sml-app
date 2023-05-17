const Lead = require('../../models/Lead');

const getLeadCheckedInactive100 = async () => {
	const leadChequedInactive = await Lead.find({
	checked: true,
	status: { $ne: "Activo" }
	}).limit(100).exec();
	return leadChequedInactive;
};

module.exports = getLeadCheckedInactive100;