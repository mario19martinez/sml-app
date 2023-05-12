const Vendedor = require('../../models/Vendedor');

const getAllVendedores = async () => {
	const vendedors = await Vendedor.findOne();
	return vendedors;
};

module.exports = getAllVendedores;
