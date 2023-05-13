const mongoose = require('mongoose');
const validator = require('validator');

const LeadSchema = new mongoose.Schema(
	{
		from: {
			type: String,
			require: true,
		},
		name: {
			type: String,
			require: true,
		},
		profession: {
			type: String,
			require: true,
		},
		email: {
			type: String,
			require: true,
			validate: {
				validator: validator.isEmail,
				message: 'El correo electrónico debe tener un formato válido',
			},
		},
		contact_number: {
			type: String,
			require: true,
		},
		web: {
			type: String,
			require: true,
		},
		instagram: {
			type: String,
			require: true,
		},
		level: {
			type: String,
			require: true,
		},
		status: {
			type: String,
			require: true,
		},
		deleted: {
			type: Boolean,
			require: true,
			default: false,
			select: false,
		},
	},
	{ timestamps: true }
);

LeadSchema.pre('find', function () {
	this.where({ deleted: false });
});

const Lead = new mongoose.model('lead', LeadSchema);

module.exports = Lead;
