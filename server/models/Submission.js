const Model = require('objection').Model;

class Submission extends Model {
  $beforeInsert() {
    this.created_at = new Date().toISOString();
  }
  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
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
        completed:        { type: 'integer' },
        notes:            { type: 'string' },
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

module.exports = Submission;
