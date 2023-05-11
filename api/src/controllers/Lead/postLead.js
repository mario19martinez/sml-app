const Lead = require('../../models/Lead');

const postLead = async ({
	id,
	name,
	email,
	web,
	instagram,
	nivel,
	deleted,
}) => {
	const lead = await Lead.create({
		id,
		name,
		email,
		web,
		instagram,
		nivel,
		deleted,
	});
	return lead;
};

module.exports = postLead;
