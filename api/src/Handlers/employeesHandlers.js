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


