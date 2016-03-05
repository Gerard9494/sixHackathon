mongoose = require 'mongoose'
Schema = mongoose.Schema
ObjectId = Schema.Types.ObjectId

module.exports = () ->
	ClientSchema = new Schema {
		name: {type: String}
		interests: [{type: String}]
	}
	mongoose.model 'Client', ClientSchema, 'clients'