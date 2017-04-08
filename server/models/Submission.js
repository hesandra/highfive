const Model = require('objection').Model;

class Submission extends Model {
  static get tableName() {
    return 'submission';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
      properties: {
        id:               { type: 'integer' },
        user_id:          { type: 'integer' },
        jobpost_id:       { type: 'integer' },
        status:           { type: 'string' },
        notes:            { type: 'string' }
      }
    };
  }

  static get relationMappings() {
    return {
      video: {
        relation: Model.HasManyRelation,
        modelClass: `${__dirname}/Video`,
        join: {
          from: 'submission.id',
          to: 'video.submission_id'
        }
      },
      jobpost: {
        relation: Model.BelongsToOneRelation,
        modelClass: `${__dirname}/Jobpost`,
        join: {
          from: 'submission.jobpost_id',
          to: 'jobpost.id'
        }
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: `${__dirname}/User`,
        join: {
          from: 'submission.user_id',
          to: 'user.id'
        }
      }
    };
  }

}

module.exports = Video;
