const Corredor = require('../../models/Corredor');

const postCorredor = async ({
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
	const corredor = await Corredor.create({
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
	return corredor;
};

module.exports = postCorredor;
