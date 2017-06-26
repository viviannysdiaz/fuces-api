/**
 * Period.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
  attributes: {
    description: {
      type: 'string'
    },
    status: {
      type: 'boolean',
      defaultsTo: true
    },
    start_date: {
      type: 'date',
      required: true
    },
    finish_date: {
      type: 'date',
      required: true
    },
    // Add a reference to User
    course: {
      model: 'course'
    },
    // Add a reference to User
    students: {
      collection: 'student',
      via: 'period'
    }
  }
};
