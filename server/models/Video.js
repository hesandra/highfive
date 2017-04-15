const Model = require('objection').Model;

class Video extends Model {
  $beforeInsert() {
    this.created_at = new Date().toISOString();
  }
  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
  static get tableName() {
    return 'video';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
      properties: {
        id:                { type: 'integer' },
        href:              { type: 'string' },
        answer:            { type: 'string' },
        submission_id:     { type: 'integer' },
        question_id:       { type: 'integer' }
      }
    };
  }
  static get relationMappings() {
    return {
      question: {
        relation: Model.BelongsToOneRelation,
        modelClass: `${__dirname}/Question`,
        join: {
          from: 'video.question_id',
          to: 'question.id'
        }
      },
      submission: {
        relation: Model.BelongsToOneRelation,
        modelClass: `${__dirname}/Submission`,
        join: {
          from: 'video.submission_id',
          to: 'submission.id'
        }
      }
    };
  }

}

module.exports = Video;
