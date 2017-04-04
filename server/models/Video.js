const Model = require('objection').Model;

const Submission = require('./Submission')
const Question = require('./Question')

class Video extends Model {
  static get tableName() {
    return 'video'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: [ 'href', 'note', 'submission_id', 'question_id' ],
      properties: {
        id:                { type: 'integer' },
        href:              { type: 'string' },
        note:              { type: 'string' },
        submission_id:     { type: 'integer' },
        question_id:       { type: 'integer' }
      }
    };
  }

  static get relationMappings() {
    return {
      
      rel1: {
        relation: Model.HasManyRelation,
        modelClass: Question,
        join: {
          from: 'video.question_id',
          to: 'question.id'
        }
      },

      rel2: {
        relation: Model.BelongsToOneRelation,
        modelClass: Submission,
        join: {
          from: 'video.submission_id',
          to: 'submission.id'
        }
      }

    }
  }

}

module.exports = Video;