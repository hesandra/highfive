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
      required: ['name', 'industry_id', 'location_id'],

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
