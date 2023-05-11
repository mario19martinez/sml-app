const Vendedor = require('../../models/Vendedor');

const postVendedor = async ({
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
	const vendedor = await Vendedor.create({
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
	return vendedor;
};

module.exports = postVendedor;
