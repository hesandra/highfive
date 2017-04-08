const Model = require('objection').Model;

const Question = require('./Question')
const Company = require('./Company')

class Jobpost extends Model {
  static get tableName() {
    return 'jobpost';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title', 'level', 'description', 'company_id'],
      properties: {
        id:                { type: 'integer' },
        company_id:        { type: 'integer' },
        title:             { type: 'string' },
        level:             { type: 'integer' },
        description:       { type: 'string' },
        industry_id:       { type: 'integer' },
        location_id:       { type: 'integer' }
      }
    };
  }

  static get relationMappings() {
    return {
      company: {
        relation: Model.BelongsToOneRelation,
        modelClass: `${__dirname}/Company`,
        join: {
          from: 'jobpost.company_id',
          to: 'company.id'
        }
      },
      question: {
        relation: Model.HasManyRelation,
        modelClass: `${__dirname}/Question`,
        join: {
          from: 'jobpost.id',
          through: {
            from: 'jobpost_question.jobpost_id',
            to: 'jobpost_question.question_id'
          },
          to: 'question.id'
        }
      }
    };
  }
}

module.exports = Jobpost;
