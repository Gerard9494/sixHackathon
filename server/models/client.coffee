mongoose = require 'mongoose'
Schema = mongoose.Schema
ObjectId = Schema.Types.ObjectId

module.exports = () ->
	ClientSchema = new Schema {
		interests: [{type: String}]
	}
	mongoose.model 'Manager', ClientSchema, 'managers'

