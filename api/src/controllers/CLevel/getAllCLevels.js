const CLevel = require('../../models/CLevel');

const getAllCLevels = async () => {
	const cLevels = await CLevel.findOne();
	return cLevels;
};

module.exports = getAllCLevels;