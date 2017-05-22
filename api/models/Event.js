/**
 * Event.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

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
      type: 'date',
      required: true
    },
    finish_date: {
      type: 'date',
      required: true
    },
  }
};
