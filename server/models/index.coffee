models = ['']
exports.initialize = () ->
	for model in models
		require(model)()
