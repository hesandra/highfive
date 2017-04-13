const Model = require('objection').Model;

class Jobpost extends Model {
  $beforeInsert() {
    this.created_at = new Date().toISOString();
  }
  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
  static get tableName() {
    return 'jobpost';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['level', 'description', 'company_id'],
      properties: {
        id:                { type: 'integer' },
        company_id:        { type: 'integer' },
        level:             { type: 'integer' },
        description:       { type: 'string' },
        industry_id:       { type: 'integer' },
        location_id:       { type: 'integer' }
      }
    };
  }
  static get relationMappings() {
    return {
      submission: {
        relation: Model.BelongsToOneRelation,
        modelClass: `${__dirname}/Submission`,
        join: {
          from: 'jobpost.id',
          to: 'submission.jobpost_id'
        }
      },
      company: {
        relation: Model.BelongsToOneRelation,
        modelClass: `${__dirname}/Company`,
        join: {
          from: 'jobpost.company_id',
          to: 'company.id'
        }
      },
      question: {
        relation: Model.ManyToManyRelation,
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
