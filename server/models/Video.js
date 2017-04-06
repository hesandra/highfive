const Model = require('objection').Model;

const User = require('./User');
const Question = require('./Question');

class Video extends Model {
  static get tableName() {
    return 'video';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['href', 'note', 'submitter_id', 'question_id'],
      properties: {
        id:                { type: 'integer' },
        href:              { type: 'string' },
        note:              { type: 'string' },
        submitter_id:      { type: 'integer' },
        question_id:       { type: 'integer' }
      }
    };
  }

  static get relationMappings() {
    return {
      question: {
        relation: Model.HasManyRelation,
        modelClass: `${__dirname}/Question`,
        join: {
          from: 'video.question_id',
          to: 'question.id'
        }
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: `${__dirname}/User`,
        join: {
          from: 'video.submitter_id',
          to: 'user.id'
        }
      }
    };
  }

}

module.exports = Video;
