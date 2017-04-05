const Model = require('objection').Model;

// const Submission = require('./Submission')
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
        title:             { type: 'string' },
        level:             { type: 'string' },
        description:       { type: 'string' },
        company_id:        { type: 'integer' },
      }
    };
  }

  static get relationMappings() {
    return {
      company: {
        relation: Model.BelongsToOneRelation,
        modelClass: Company,
        join: {
          from: 'jobpost.company_id',
          to: 'company.id'
        }
      },
      // rel2: {
      //   relation: Model.HasManyRelation,
      //   modelClass: Submission,
      //   join: {
      //     from: 'jobpost.id',
      //     to: 'submission.jobpost_id'
      //   }
      // },
      question: {
        relation: Model.HasManyRelation,
        modelClass: Question,
        join: {
          from: 'jobpost.id',
          through: {
            from: 'jobpost_question.jobpost_id',
            to: 'jobpost_question.questions_id'
          },
          to: 'question.id'
        }
      }
    };
  }
}

module.exports = Jobpost;
