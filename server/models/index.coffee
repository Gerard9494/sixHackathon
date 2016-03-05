models = ['./manager.js', './client.js']
exports.initialize = () ->
	for model in models
		require(model)()
