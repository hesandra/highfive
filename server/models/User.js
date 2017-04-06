const Model = require('objection').Model;
const Location = require('./Location');
const Industry = require('./Industry');

class User extends Model {
  static get tableName() {
    return 'user';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'email', 'auth0_id', 'github_url'],
      properties: {
        id:              { type: 'integer' },
        name:            { type: 'string' },
        email:           { type: 'string' },
        auth0_id:        { type: 'string' },
        location_id:     { type: 'integer' },
        profile_img:     { type: 'string' },
        github_url:      { type: 'string' },
        linkedin_url:    { type: 'string' }
      }
    };
  }

  static get relationMappings() {
    return {
      location: {
        relation: Model.HasOneRelation,
        modelClass: Location,
        join: {
          from: 'user.location_id',
          to: 'location.id'
        }
      },

      industry: {
        relation: Model.ManyToManyRelation,
        modelClass: Industry,
        join: {
          from: 'user.id',
          through: {
            from: 'user_industry.user_id',
            to: 'user_industry.industry_id'
          },
          to: 'industry.id'
        }
      },

      // rel3: {
      //   relation: Model.HasManyRelation,
      //   modelClass: Submission,
      //   join: {
      //     from: 'user.id',
      //     to: 'submission.user_id'
      //   }
      // }
    };
  }

}

module.exports = User;
