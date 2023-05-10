const getAllEmployees = require("../controllers/getAllEmployees");

const getAllEmployeesHandler = async (req, res) => {
  try {
    const AllEmployees = await getAllEmployees();
    res.status(200).json(AllEmployees);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { getAllEmployeesHandler};

// 📍 POST | /recipes
// Esta ruta recibirá todos los datos necesarios para crear una nueva receta y relacionarla con los tipos de dieta solicitados.
// Toda la información debe ser recibida por body.
// Debe crear la receta en la base de datos, y esta debe estar relacionada con los tipos de dieta indicados (al menos uno).
