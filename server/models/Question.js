const Model = require('objection').Model;

const Video = require('./Video')
const Jobpost = require('./Jobpost')

class Question extends Model {
  static get tableName() {
    return 'question'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: [ 'id', 'type', 'question' ],
      properties: {
        id:               { type: 'integer' },
        type:             { type: 'string' },
        question:         { type: 'string' }
      }
    };
  }

  static get relationMappings() {
    return {
      
      rel1: {
        relation: Model.BelongsToOneRelation,
        modelClass: Video,
        join: {
          from: 'question.id',
          to: 'video.question_id'
        }
      },

      rel2: {
        relation: Model.BelongsToOneRelation,
        modelClass: Jobpost,
        join: {
          from: 'question.id',
          through: {
            from: 'jobpost_question.question.id',
            to: 'jobpost_question.jobpost_id'
          },
          to: 'jobpost.id'
        }
      }

    }
  }

}

module.exports = Question;