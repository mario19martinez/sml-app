const Lead = require('../../models/Lead');

const getLeadUnchecked = async () => {
	const leadUnchecked = await Lead.find({ checked: false }).limit(10).exec();
	return leadUnchecked;
};

module.exports = getLeadUnchecked;
