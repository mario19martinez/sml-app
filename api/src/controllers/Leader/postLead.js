const Leader = require('../../models/Leader');

const postLeader = async ({
	From,
	Name,
	Profession,
	Email,
	Contact_number,
	Web,
	Instagram,
	Level,
	Status,
	Deleted,
}) => {
	const leader = await Leader.create({
		From,
		Name,
		Profession,
		Email,
		Contact_number,
		Web,
		Instagram,
		Level,
		Status,
		Deleted,
	});
	return leader;
};

module.exports = postLeader;
