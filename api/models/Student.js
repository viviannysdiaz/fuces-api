/**
 * Student.js
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
    phone: {
      type: 'string',
      required: true
    },
    country: {
      type: 'string',
      required: true
    },
    parish: {
      type: 'string'
    },
    state: {
      type: 'string',
      required: true
    },
    city: {
      type: 'string',
      required: true
    },
    address: {
      type: 'string'
    },
    organization: {
      type: 'string'
    },
    leader_organization: {
      type: 'string'
    },
    // Add a reference to User
    period: {
      model: 'period'
    },
  }
};
