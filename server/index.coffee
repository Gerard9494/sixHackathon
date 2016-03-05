# core
http = require 'http'

# public
mongoose = require 'mongoose'
express = require 'express'
bodyparser = require 'body-parser'
 
# custom
models = require './models/index.js'

mongoose.connect('mongodb://localhost/six')
models.initialize() 

app = express()
app.use(bodyparser.json())
app.use('/manager', require('./routes/manager.js'))
app.use '/client', require './routes/client.js'
http.createServer(app).listen(8080) 