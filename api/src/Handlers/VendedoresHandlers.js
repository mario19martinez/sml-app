const getAllVendedors = require('../controllers/Vendedor/getAllVendedors');
const getVendedorById = require('../controllers/Vendedor/getVendedorById');
const getVendedorByName = require('../controllers/Vendedor/getVendedorByName');
const postVendedor = require('../controllers/Vendedor/postVendedor');
const updateVendedorById = require('../controllers/Vendedor/updateVendedorById');

const getAllVendedoresHandler = async (req, res) => {
	try {
		const vendedores = await getAllVendedors();
		res.status(200).json(vendedores);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

const postVendedorHandler = async (req, res) => {
	const data = req.body;
	console.log(data);
	try {
		const vendedor = await postVendedor(data);
		res.status(200).json(data);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

const updateVendedorHandler = async (req, res) => {
	const id = req.params.id;
	const updatedData = req.body;

	try {
		const vendedor = await updateVendedorById(id, updatedData);
		res.status(200).json(vendedor);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

const getVendedorByNameHandler = async (req, res) => {
	const { name } = req.query;

	try {
		const vendedor = await getVendedorByName(name);
		res.status(200).json(vendedor);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

const getVendedorByIdHandler = async (req, res) => {
	const id = req.params.id;

	try {
		const vendedor = await getVendedorById(id);
		res.status(200).json(vendedor);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

module.exports = {
	getAllVendedoresHandler,
	postVendedorHandler,
	updateVendedorHandler,
	getVendedorByIdHandler,
	getVendedorByNameHandler,
};
