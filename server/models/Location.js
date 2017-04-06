const Model = require('objection').Model;

const Company = require('./Company')
const User = require('./User')

class Location extends Model {
  static get tableName() {
    return 'location';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['state', 'city'],
      properties: {
        id:                { type: 'integer' },
        state:             { type: 'string' },
        city:              { type: 'string' }
      }
    };
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.HasManyRelation,
        modelClass: `${__dirname}/User`,
        join: {
          from: 'location.id',
          through: {
            from: 'user_location.location_id',
            to: 'user_location.user_id',
          },
          to: 'user.location_id'
        }
      },
      company: {
        relation: Model.HasManyRelation,
        modelClass: `${__dirname}/Company`,
        join: {
          from: 'location.id',
          to: 'company.location_id'
        }
      }
    };
  }
}

module.exports = Location;
