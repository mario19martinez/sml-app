const getAllLeads = require("../controllers/getAllLeads")

const getAllLeadsHandler = async (req, res) => {
  try {
    const AllLeads = await getAllLeads();
    res.status(200).json(AllLeads);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};


module.exports = { getAllLeadsHandler };