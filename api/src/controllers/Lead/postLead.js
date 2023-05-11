const Lead = require('../../models/Lead');

const postLead = async ({
	Name,
	Category,
	City,
	Province,
	Url,
	Nivel,
	Telephone,
	Status,
	Email,
	Instagram,
	Deleted,
}) => {
	const lead = await Lead.create({
		Name,
		Category,
		City,
		Province,
		Url,
		Nivel,
		Telephone,
		Status,
		Email,
		Instagram,
		Deleted,
	});
	return lead;
};

module.exports = postLead;
