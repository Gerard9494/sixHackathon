# core
http = require 'http'

# public
mongoose = require 'mongoose'
express = require 'express'
bodyparser = require 'body-parser'
 
# custom
models = require './models/index.coffee'

mongoose.connect('mongodb://localhost/six')
models.initialize() 

app = express()
app.use(bodyparser.json())
app.use('/user', require('./routes/user.coffee'))

http.createServer(app).listen(8080) 