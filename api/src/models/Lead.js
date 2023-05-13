const mongoose = require("mongoose");
const validator = require("validator");

const LeadSchema = new mongoose.Schema(
	{
		from: {
			type: String,
		},
		name: {
			type: String,
		},
		profession: {
			type: String,
		},
		email: {
			type: String,
			validate: {
				validator: validator.isEmail,
				message: 'El correo electrónico debe tener un formato válido',
			},
		},
		contact_number: {
			type: String,
		},
		web: {
			type: String,
		},
		instagram: {
			type: String,
		},
		level: {
			type: String,
		},
		status: {
			type: String,
		},
		deleted: {
			type: Boolean,
			default: false,
			select: false,
		},
	},
	{ timestamps: true }
);

LeadSchema.pre("find", function () {
  this.where({ deleted: false });
});

const Lead = new mongoose.model("lead", LeadSchema);

module.exports = Lead;
