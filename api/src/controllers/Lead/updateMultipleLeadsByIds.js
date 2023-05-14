const updateLeadById = require("./updateLeadById");

const updateMultipleLeadsByIds = async (ids, updatedData) => {
	const results = [];
	for (const id of ids) {
		try {
			const lead = await updateLeadById(id, updatedData);
			results.push(lead);
		} catch (error) {
			console.log(error.message);
			results.push({ error: error.message });
		}
	}
	return results;
};

module.exports = {
	updateMultipleLeadsByIds,
};
