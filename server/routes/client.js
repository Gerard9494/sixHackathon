// Generated by CoffeeScript 1.10.0
(function() {
  var Client, Cloudant, Manager, ObjectId, async, config, express, mongoose, router;

  express = require('express');

  router = express.Router();

  mongoose = require('mongoose');

  ObjectId = mongoose.Types.ObjectId;

  Manager = mongoose.model('Manager');

  Client = mongoose.model('Client');

  Cloudant = require('cloudant');

  async = require('async');

  config = require('../config.coffee');

  router.get('/', function(req, res, next) {
    var cloudant, kv_content;
    cloudant = Cloudant({
      account: config.cloudant_user,
      password: config.cloudant_password
    });
    kv_content = cloudant.db.use('kv_content');
    // START HERE;
    kv_content.list(function(err, body) {
      var key;
      if (!err) {
        var rows = body.rows;
        rows.forEach(function(item) {
          key = item.key;
          kv_content.get(key, function(err, data) {
            var entities, resData;
            entities = data.features.entity;
            entities.forEach(function(entity) {
              console.log(entity);
            });
          });
          console.log(key);
        });
        ////key = body.rows[0].key;
        //return kv_content.get(key, function(err, data) {
        //  var entities, resData;
        //  entities = data.features.entity;
        //  resData = [];
        //  console.log(data);
        //  return async.each(entities, function(entity, callback) {
        //    var resEntity;
        //    console.log('entity ' + entity);
        //    resEntity = {
        //      type: entity.type,
        //      text: entity.text
        //    };
        //    resData.push(resEntity);
        //    return callback();
        //  }, function(err) {
        //    if (err) {
        //      console.log(err);
        //      return res.send(500).json(err);
        //    } else {
        //      return res.status(200).json(resData);
        //    }
        //  });
        //});
      }
    });
    return // FINISH HERE;
  });

  router.get('/seed', function(req, res, next) {
    var client;
    client = new Client({
      name: "SIXInvestor",
      interests: ["copper", "aluminium", "zinc", "gold", "alcoa inc", "lme", "us fed"]
    });
    return client.save(function(error, savedClient, nInserted) {
      if (!error) {
        return res.status(200).send('ok');
      } else {
        return res.status(500).send('ops');
      }
    });
  });

  router.post('/', function(req, res, next) {
    return async.waterfall([
      function(callback) {
        var client;
        client = new Client({
          name: req.body.name
        });
        return client.save(callback);
      }, function(savedClient, nInserted, callback) {
        return callback(null, savedClient);
      }
    ], function(err, result) {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      } else {
        console.log(result);
        return res.status(200).json(result);
      }
    });
  });

  module.exports = router;

}).call(this);
