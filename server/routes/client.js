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

  var strsplit = require('strsplit');

  router.get('/', function(req, res, next) {
    var cloudant, kv_content;
    cloudant = Cloudant({
      account: config.cloudant_user,
      password: config.cloudant_password
    });
    kv_content = cloudant.db.use('kv_content');
    // START HERE;
    Client.findOne({name: "SIXInvestor"}, function(err, client) { 
      intsts = client.interests.toString();
      interests = strsplit(intsts, ',');
      console.log(interests);
      if (!err) {
        kv_content.list(function(err, body) {
        var key;
        if (!err) {
          resData = [];
          var rows = body.rows;
          rows.forEach(function(item) {
            key = item.key;
            kv_content.get(key, function(err, data) {
              var entities;
              entities = data.features.entity;
              entities.forEach(function(entity) {
                var b = false;
                if(!b) {
                  interests.forEach(function(interest) {
                    if(!b) {
                      if(entity.text.indexOf(interest) > -1) {
                        resData.push(data.url);
                        b = true;
                      }
                    }
                  });
                }
              });
            });
          }, function onSucess() {
            res.status(200).json(resData);
          });
        }
      });
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
