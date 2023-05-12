const CLevel = require('../../models/CLevel');

const getAllCLevels = async () => {
	const cLevels = await CLevel.find();
	console.log(cLevels);
	return cLevels;
};

module.exports = getAllCLevels;
