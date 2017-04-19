const Model = require('objection').Model;
const moment = require('moment');

class User extends Model {
  $beforeInsert() {
    this.created_at = moment().format('LL');
  }
  $beforeUpdate() {
    this.updated_at = moment().format('LL');
  }
  static get tableName() {
    return 'user';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
      properties: {
        id:              { type: 'integer' },
        name:            { type: 'string' },
        email:           { type: 'string' },
        auth0_id:        { type: 'string' },
        location_id:     { type: 'integer' },
        profile_img:     { type: 'string' },
        github_url:      { type: 'string' },
        linkedin_url:    { type: 'string' },
        created_at:      { type: 'string' },
        updated_at:      { type: 'string' }
      }
    };
  }

  static get relationMappings() {
    return {
      location: {
        relation: Model.HasOneRelation,
        modelClass: `${__dirname}/Location`,
        join: {
          from: 'user.location_id',
          to: 'location.id'
        }
      },

      industry: {
        relation: Model.ManyToManyRelation,
        modelClass: `${__dirname}/Industry`,
        join: {
          from: 'user.id',
          through: {
            from: 'user_industry.user_id',
            to: 'user_industry.industry_id'
          },
          to: 'industry.id'
        }
      },
      submission: {
        relation: Model.HasManyRelation,
        modelClass: `${__dirname}/Submission`,
        join: {
          from: 'user.id',
          to: 'submission.user_id'
        }
      }
    };
  }

}

module.exports = User;
