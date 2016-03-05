# core
http = require 'http'

# public
mongoose = require 'mongoose'
express = require 'express'
bodyparser = require 'body-parser'
Cloudant = require 'cloudant'
 
# custom
models = require './models/index.js'
config = require './config.coffee'

mongoose.connect(config.db_path)
models.initialize() 

app = express()
app.use(bodyparser.json())
app.use('/manager', require('./routes/manager.js'))
app.use '/client', require './routes/client.js'
http.createServer(app).listen config.port