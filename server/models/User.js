const Model = require('objection').Model;

const Location = require('./Location')
const Industry = require('./Industry')
// const Submission = require('./Submission')

class User extends Model {
  static get tableName() {
    return 'user'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: [ 'name', 'email', 'location_id' ],
      properties: {
        id:              { type: 'integer' },
        name:            { type: 'string' },
        email:           { type: 'string' },
        location_id:     { type: 'string' },
        profile_img:     { type: 'string' }
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
        relation: Model.BelongsToOneRelation,
        modelClass: Industry,
        join: {
          from: 'user.id',
          through: {
            from: "user_industry.user_id",
            to: "user_industry.industry_id"
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

    }
  }

}

module.exports = User;