const Model = require('objection').Model;

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
        name:             { type: 'string' }
      }
    };
  }

  static get relationMappings() {
    return {
      company: {
        relation: Model.HasManyRelation,
        modelClass: `${__dirname}/Company`,
        join: {
          from: 'industry.id',
          to: 'company.industry_id'
        }
      },

      user: {
        relation: Model.ManyToManyRelation,
        modelClass: `${__dirname}/User`,
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
