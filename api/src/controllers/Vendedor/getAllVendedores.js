const Vendedor = require('../../models/Vendedor');

const getAllVendedores = async () => {
	const vendedors = await Vendedor.find();
	return vendedors;
};

module.exports = getAllVendedores;
