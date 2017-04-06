const Model = require('objection').Model;

const Video = require('./Video');
const Jobpost = require('./Jobpost');

// Class Variables
const Jr = 0;
const Mid = 1;
const Sr = 2;

class Question extends Model {
  static get tableName() {
    return 'question';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['id', 'type', 'question'],
      properties: {
        id:               { type: 'integer' },
        level:            { type: 'integer' },
        type:             { type: 'string' },
        question:         { type: 'string' },
        jobpost_id:       { type: 'integer' }
      }
    };
  }

  static get relationMappings() {
    return {
      video: {
        relation: Model.BelongsToOneRelation,
        modelClass: `${__dirname}/Video`,
        join: {
          from: 'question.id',
          to: 'video.question_id'
        }
      },
      jobpost: {
        relation: Model.BelongsToOneRelation,
        modelClass: `${__dirname}/Jobpost`,
        join: {
          from: 'question.id',
          through: {
            from: 'jobpost_question.question.id',
            to: 'jobpost_question.jobpost_id'
          },
          to: 'jobpost.id'
        }
      }
    };
  }
}

module.exports = Question;
