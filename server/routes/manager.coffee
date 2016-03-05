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

# given managers id, give all clients names
router.get '/:id', (req, res, next) ->
  id = req.params.id
  Manager.findOne {_id: new ObjectId id}, (err, dbManager) ->
    if not err
      clients = dbManager.clients
      resClients = []
      for client in clients
        Client.find {_id: new ObjectId client}, (err, dbClient) ->
          if not err then resClients.push dbClient.name
      console.log resClients
      res.status(200).json resClients    

# given managers id and clients id, give that clients info


########
# POST #
########

# register new manager
router.post '/', (req, res, next) ->
  async.waterfall(
    [
      (callback) ->
        manager = new Manager {
          name: req.body.name
        }
        manager.save callback
      (savedManager, nInserted, callback) ->
        callback null, savedManager
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