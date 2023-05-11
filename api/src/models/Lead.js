const mongoose = require('mongoose');
const validator = require('validator');

const LeadSchema = new mongoose.Schema(
	{
		Name: {
			type: String,
			required: true,
			trim: true,
		},
		Category: {
			type: String,
			trim: true,
		},
		City: {
			type: String,
			trim: true,
		},
		Province: {
			type: String,
			trim: true,
		},
		Url: {
			type: String,
			trim: true,
		},
		Nivel: {
			type: Number,
			required: true,
			trim: true,
			enum: [1, 2, 3],
		},
		Telephone: {
			type: String,
			trim: true,
		},
		Status: {
			type: String,
			enum: ['sin contratar', 'contratado'],
			default: 'sin contratar',
			trim: true,
		},

		Email: {
			type: String,
			required: true,
			trim: true,
			validate: {
				validator: validator.isEmail,
				message: 'El correo electrónico debe tener un formato válido',
			},
		},
		Instagram: {
			type: String,
			required: true,
			trim: true,
		},
		Deleted: {
			type: Boolean,
			default: false,
			select: false,
		},
	},
	{
		timestamps: false,
	}
);

LeadSchema.pre('find', function () {
	this.where({ deleted: false });
});

const Lead = mongoose.model('Lead', LeadSchema);

module.exports = Lead;
