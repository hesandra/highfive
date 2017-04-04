
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('location', (table) => {
      table.increments('id').primary()
      table.string('state')
      table.string('city')
    })
    .createTable('user', (table) => {
      table.increments('id').primary()
      table.string('name')
      table.string('email')
      table.string('auth0_id')
      table.integer('location_id').unsigned().references('id').inTable('location')
      table.string('profile_img')
    })
    .createTable('industry', (table) => {
      table.increments('id').primary()
      table.string('name')
    })
    .createTable('company', (table) => {
      table.increments('id').primary()
      table.string('name')
      table.string('email')
      table.string('profile_img')
      table.integer('industry_id').unsigned().references('id').inTable('industry')
      table.integer('location_id').unsigned().references('id').inTable('location')
    })
    .createTable('jobpost', (table) => {
      table.increments('id').primary()
      table.string('title')
      table.string('level')
      table.string('description')
      table.integer('company_id').unsigned().references('id').inTable('company')
    })
    .createTable('question', (table) => {
      table.increments('id').primary()
      table.string('type')
      table.string('question')
      table.integer('job_id').unsigned().references('id').inTable('jobpost')
    })
    // .createTable('submission', (table) => {
      // table.increments('id').primary()
        // .unsigned()
        // .references('submission_id').inTable('video')
    //   table.integer('user_id').unsigned().references('id').inTable('user')
    //   table.integer('status')
    //   table.integer('jobpost_id').unsigned().references('id').inTable('jobpost')
    // })
    .createTable('video', (table) => {
      table.increments('id').primary()
      table.string('href')
      table.string('note')
      table.integer('question_id').unsigned().references('id').inTable('question')
      table.integer('submitter_id').unsigned().references('id').inTable('user')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('company')
    .dropTableIfExists('industry')
    .dropTableIfExists('jobpost')
    .dropTableIfExists('location')
    .dropTableIfExists('question')
    // .dropTableIfExists('submission')
    .dropTableIfExists('user')
    .dropTableIfExists('video')
};
