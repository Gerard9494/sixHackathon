models = ['./manager.coffee', './client.coffee']
exports.initialize = () ->
	for model in models
		require(model)()
