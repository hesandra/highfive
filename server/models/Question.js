const Model = require('objection').Model;

class Question extends Model {
  static get tableName() {
    return 'question';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['type', 'question'],
      properties: {
        id:               { type: 'integer' },
        level:            { type: 'integer' },
        type:             { type: 'string' },
        question:         { type: 'string' },
        title:            { type: 'string' }
      }
    };
  }

  static get relationMappings() {
    return {
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
      },

      video: {
        relation: Model.HasManyRelation,
        modelClass: `${__dirname}/Video`,
        join: {
          from: 'question.id',
          to: 'video.question_id'
        }
      }
    };
  }
}

module.exports = Question;
