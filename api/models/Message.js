/**
 * Message.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true
    },
    subject: {
      type: 'string',
      required: true
    },
    message: {
      type: 'longtext',
      required: true
    },
    read: {
      type: 'boolean',
      defaultsTo: false
    }
  }
};
