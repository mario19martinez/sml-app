const Lead = require('../../models/Lead');

const postLead = async ({
	id,
	name,
	profesion,
	nivel,
	phone,
	status,
	email,
	web,
	instagram,
	deleted,
}) => {
	const lead = await Lead.create({
		id,
		name,
		profesion,
		nivel,
		phone,
		status,
		email,
		web,
		instagram,
		deleted,
	});
	return lead;
};

module.exports = postLead;
