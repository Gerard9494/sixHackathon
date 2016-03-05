mongoose = require 'mongoose'
Schema = mongoose.Schema
ObjectId = Schema.Types.ObjectId

module.exports = () ->
	ManagerSchema = new Schema {
		name: {type: String}
		clients: [{type: ObjectId, ref: 'Client'}]
	}
	mongoose.model 'Manager', ManagerSchema, 'managers'