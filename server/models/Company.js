const Model = require('objection').Model;

const Jobpost = require('./Jobpost')
const Industry = require('./Industry')
const Location = require('./Location')

class Company extends Model {
  static get tableName() {
    return 'company'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: [ 'name', 'industry', 'location_id' ],

      properties: {
        id:               { type: 'integer' },
        name:             { type: 'string' },
        email:            { type: 'string' },
        profile_img:      { type: 'string', maxLength: 255 },
        industry_id:      { type: 'integer' },
        location_id:      { type: 'integer' }
      }
    };
  }

  static get relationMappings() {
    return {
      
      rel1: {
        relation: Model.HasManyRelation,
        modelClass: Jobpost,
        // modelClass: __dirname + '/Itinerary',
        join: {
          from: 'company.id',
          to: 'jobpost.company_id'
        }
      },

      rel2: {
        relation: Model.BelongsToOneRelation,
        // modelClass: __dirname + '/User',
        modelClass: Industry,
        join: {
          from: 'company.industry_id',
          to: 'industry.id'
        }
      },

      rel3: {
        relation: Model.BelongsToOneRelation,
        // modelClass: __dirname + '/User',
        modelClass: Location,
        join: {
          from: 'company.location_id',
          to: 'location.id'
        }
      }

    }
  }

}

module.exports = Company;