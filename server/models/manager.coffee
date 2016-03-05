mongoose = require 'mongoose'
Schema = mongoose.Schema
ObjectId = Schema.Types.ObjectId

module.exports = () ->
	ManagerSchema = new Schema {
		clients: [{type: ObjectId, ref: 'Client'}]
	}
	mongoose.model 'Manager', ManagerSchema, 'managers'

