const Model = require('objection').Model;

const Jobpost = require('./Jobpost');
const Industry = require('./Industry');
const Location = require('./Location');

class Company extends Model {
  static get tableName() {
    return 'company';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],

      properties: {
        id:               { type: 'integer' },
        industry_id:      { type: 'integer' },
        location_id:      { type: 'integer' },
        name:             { type: 'string' },
        profile_img:      { type: 'string' },
        email:            { type: 'string' },
        address:          { type: 'string' },
        auth0_id:         { type: 'string' }
      }
    };
  }

  static get relationMappings() {
    return {
      jobposts: {
        relation: Model.HasManyRelation,
        modelClass: `${__dirname}/Jobpost`,
        join: {
          from: 'company.id',
          to: 'jobpost.company_id'
        }
      },

      industry: {
        relation: Model.BelongsToOneRelation,
        modelClass: `${__dirname}/Industry`,
        join: {
          from: 'company.industry_id',
          to: 'industry.id'
        }
      },

      location: {
        relation: Model.BelongsToOneRelation,
        modelClass: `${__dirname}/Location`,
        join: {
          from: 'company.location_id',
          to: 'location.id'
        }
      }
    };
  }

}

module.exports = Company;
