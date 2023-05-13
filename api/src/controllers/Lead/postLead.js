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
	checked,
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
		checked,
		deleted,
	});
	return lead;
};

module.exports = postLead;
