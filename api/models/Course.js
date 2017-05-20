/**
 * Course.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
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
    description: {
      type: 'text',
      required: true
    },
    image: {
      type: 'string',
      required: true
    },
    instructor: {
      type: 'string',
      required: true
    },
    hours: {
      type: 'integer',
      required: true
    },

    // Add a reference to Period
    periods: {
      collection: 'period',
      via: 'course'
    }
  }
};
