const Lead = require("../../models/Lead");

const getLeadCheckedInactive100 = async () => {
  const leadChequedInactive = await Lead.find({
    checked: true,
    $nor: [
      { status: "Activo" },
      { status: "Contratado" }
    ]
  })
    .limit(100)
    .exec();
  return leadChequedInactive;
};

module.exports = getLeadCheckedInactive100;