const Model = require('objection').Model;

const Company = require('./Jobpost');
const User = require('./User');

class Industry extends Model {
  static get tableName() {
    return 'industry';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        id:               { type: 'integer' },
        name:             { type: 'string' },
      }
    };
  }

  static get relationMappings() {
    return {
      rel1: {
        relation: Model.HasOneRelation,
        modelClass: Company,
        join: {
          from: 'industry.id',
          to: 'company.industry_id'
        }
      },

      rel2: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'industry.id',
          through: {
            from: 'user_industry.industry_id',
            to: 'user_industry.user_id'
          },
          to: 'user.id'
        }
      }
    };
  }
}

module.exports = Industry;
