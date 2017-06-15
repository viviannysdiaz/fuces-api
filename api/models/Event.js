/**
 * Event.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 var fs      = require('fs');
 const uuidV4 = require('uuid/v4');

module.exports = {

  attributes: {
    title: {
      type: 'string',
      required: true
    },
    subtitle: {
      type: 'string',
      required: true
    },
    slug: {
      type: 'string',
      required: true
    },
    carousel: {
      type: 'boolean',
      defaultsTo: false
    },
    description: {
      type: 'text',
      required: true
    },
    image: {
      type: 'text',
      required: true
    },
    start_date: {
      type: 'datetime',
      required: true
    },
    finish_date: {
      type: 'datetime',
      required: true
    },
    toJSON: function () {
      var obj = this.toObject();
      obj.image = sails.config.urls.url_local + obj.image;
      return obj;
    }
  },
  beforeCreate : function (values, next) {
    var uuid = uuidV4();
    if (values.image == null) {
      sails.log('sin foto');
    }
    var dir = '.tmp/public/images';
    if (!fs.existsSync(dir)){
      if (!fs.existsSync('.tmp/public')){
        fs.mkdirSync('.tmp/public');
      }
      fs.mkdirSync('.tmp/public/images');
    }
    var buff = new Buffer(values.image.replace(/^data:image\/(png|gif|jpeg);base64,/,''), 'base64');
    fs.writeFile('.tmp/public/images/'+ uuid, buff, function (err) {
      if(err) {
          sails.log(err)
          next();
      }
      values.image = '/images/' + uuid;
      next();
    });
  },
  beforeUpdate : function (values, next) {
    var uuid = uuidV4();
    if (values.image == null) {
      sails.log('sin foto');
      next();
    } else {
      if (values.image.indexOf("data:image") < 0) {
        delete values.image;
        next();
      } else {
        var dir = '.tmp/public/images';
        if (!fs.existsSync(dir)){
          if (!fs.existsSync('.tmp/public')){
            fs.mkdirSync('.tmp/public');
          }
          fs.mkdirSync('.tmp/public/images');
        }
        var buff = new Buffer(values.image.replace(/^data:image\/(png|gif|jpeg);base64,/,''), 'base64');
        fs.writeFile('.tmp/public/images/'+ uuid, buff, function (err) {
          if(err) {
              sails.log(err)
              next();
          }
          values.image = '/images/' + uuid;
          next();
        });
      }
    }
  },
};
