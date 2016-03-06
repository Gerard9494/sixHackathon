# public
express = require 'express'
router = express.Router()

mongoose = require 'mongoose'
ObjectId = mongoose.Types.ObjectId
Manager = mongoose.model 'Manager'
Client = mongoose.model 'Client'
Cloudant = require 'cloudant'
async = require 'async'

# custom
config = require '../config.coffee'

#######
# GET #
#######

router.get '/', (req, res, next) ->
  cloudant = Cloudant {account:config.cloudant_user, password:config.cloudant_password}
  kv_content = cloudant.db.use('kv_content')

  `// START HERE`
  kv_content.list (err, body) ->
    if not err
      key = body.rows[0].key
      kv_content.get key, (err, data) ->
        entities = data.features.entity
        resData = []
        console.log data
        async.each(entities, (entity, callback) ->
          console.log 'entity ' + entity
          resEntity = {
            type: entity.type,
            text: entity.text
          }
          resData.push resEntity
          callback()
        , (err) ->
          if err
            console.log err
            res.send(500).json err
          else
            res.status(200).json resData
        )
  `// FINISH HERE`

router.get '/seed', (req, res, next) ->
  client = new Client {
    name: "SIXInvestor",
    interests: [ "copper", "aluminium", "zinc", "gold", "alcoa inc", "lme", "us fed" ]
  }
  client.save (error, savedClient, nInserted) ->
    if not error then res.status(200).send 'ok'
    else res.status(500).send 'ops'

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