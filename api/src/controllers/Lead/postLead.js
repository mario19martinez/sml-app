const Lead = require('../../models/Lead');

const postLead = async ({
	from,
	name,
	profession,
	email,
	contact_number,
	web,
	instagram,
	level,
	status,
	deleted,
}) => {
	const lead = await Lead.create({
		from,
		name,
		profession,
		email,
		contact_number,
		web,
		instagram,
		level,
		status,
		deleted,
	});
	return lead;
};

module.exports = postLead;
