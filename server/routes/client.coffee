# public
express = require 'express'
router = express.Router()

mongoose = require 'mongoose'
ObjectId = mongoose.Types.ObjectId
Manager = mongoose.model 'Manager'
Client = mongoose.model 'Client'

async = require 'async'

#######
# GET #
#######

########
# POST #
########

# register new client
router.post '/', (req, res, next) ->
  async.waterfall(
    [
      (callback) ->
        client = new Client {
          name: req.body.name
        }
        client.save callback
      (savedClient, nInserted, callback) ->
        callback null, savedClient
    ],
    (err, result) ->
      if err
        console.log err
        res.status(500).json err
      else
        console.log result
        res.status(200).json result
  )
  
module.exports = router