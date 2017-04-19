const Model = require('objection').Model;

class Location extends Model {
  static get tableName() {
    return 'location';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
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
