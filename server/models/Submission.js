const Model = require('objection').Model;

const Video = require('./Video')
const Jobpost = require('./Jobpost')
const User = require('./User')

//list out statuses here
//const x = 0;
//const y = 1;

class Submission extends Model {
  static get tableName() {
    return 'submission'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: [ 'id', 'user_id', 'status', 'jobpost_id' ],
      properties: {
        id:             { type: 'integer' },
        user_id:        { type: 'integer' },
        status:         { type: 'integer' },
        jobpost_id:     { type: 'integer' }
      }
    };
  }

  static get relationMappings() {
    return {
      
      rel1: {
        relation: Model.HasManyRelation,
        modelClass: Video,
        join: {
          from: 'submission.id',
          to: 'video.submission_id'
        }
      },

      rel2: {
        relation: Model.BelongsToOneRelation,
        modelClass: Jobpost,
        join: {
          from: 'submission.jobpost_id',
          to: 'jobpost.id'
        }
      },

      rel3: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'submission.user_id',
          to: 'user.id'
        }
      }

    }
  }

}

module.exports = Submission;