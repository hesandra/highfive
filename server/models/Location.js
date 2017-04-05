const Model = require('objection').Model;

const Company = require('./Company')
const User = require('./User')

class Location extends Model {
  static get tableName() {
    return 'location'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: [ 'state', 'city' ],
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
        modelClass: User,
        join: {
          from: 'location.id',
          to: 'user.location_id'
        }
      },

      company: {
        relation: Model.HasManyRelation,
        modelClass: Company,
        join: {
          from: 'location.id',
          to: 'company.location_id'
        }
      }

    }
  }

}

module.exports = Location;