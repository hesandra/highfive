const moment = require('moment');

exports.up = function(knex, Promise) {
  return knex.raw('SET foreign_key_checks = 0;')
    .then(() => {
      return knex.schema
        .createTable('location', (table) => {
          table.increments('id').primary();
          table.string('state');
          table.string('city');
        })
        .createTable('user', (table) => {
          table.increments('id').primary();
          table.string('name');
          table.string('email');
          table.string('auth0_id');
          table.integer('location_id').unsigned().references('id').inTable('location');
          table.string('profile_img');
          table.string('github_url');
          table.string('linkedin_url');
          table.string('created_at').notNullable().defaultTo(moment().format('LL'));
          table.string('updated_at').notNullable().defaultTo(moment().format('LL'));
        })
        .createTable('industry', (table) => {
          table.increments('id').primary();
          table.string('name');
        })
        .createTable('company', (table) => {
          table.increments('id').primary();
          table.string('name');
          table.string('profile_img');
          table.string('address');
          table.string('email');
          table.string('auth0_id');
          table.integer('industry_id').unsigned().references('id').inTable('industry');
          table.integer('location_id').unsigned().references('id').inTable('location');
        })
        .createTable('submission', (table) => {
          table.increments('id').primary();
          table.integer('user_id').unsigned().references('id').inTable('user');
          table.integer('jobpost_id').unsigned().references('id').inTable('jobpost');
          table.string('status');
          table.integer('completed');
          table.string('notes');
          table.string('created_at').notNullable().defaultTo(moment().format('LL'));
          table.string('updated_at').notNullable().defaultTo(moment().format('LL'));
        })
        .createTable('jobpost', (table) => {
          table.increments('id').primary();
          table.string('title');
          table.integer('level');
          table.string('description');
          table.integer('industry_id');
          table.integer('location_id');
          table.integer('company_id').unsigned().references('id').inTable('company');
          table.string('created_at').notNullable().defaultTo(moment().format('LL'));
          table.string('updated_at').notNullable().defaultTo(moment().format('LL'));
        })
        .createTable('question', (table) => {
          table.increments('id').primary();
          table.string('type');
          table.string('title');
          table.string('question');
          table.integer('level');
        })
        .createTable('video', (table) => {
          table.increments('id').primary();
          table.string('href');
          table.string('answer');
          table.integer('question_id').unsigned().references('id').inTable('question');
          table.integer('submission_id').unsigned().references('id').inTable('submission');
          table.string('created_at').notNullable().defaultTo(moment().format('LL'));
          table.string('updated_at').notNullable().defaultTo(moment().format('LL'));
        })
        .createTable('jobpost_question', (table) => {
          table.increments('id').primary();
          table.integer('jobpost_id').unsigned().references('id').inTable('jobpost').onDelete('CASCADE');
          table.integer('question_id').unsigned().references('id').inTable('question').onDelete('CASCADE');
        })
        .createTable('user_industry', (table) => {
          table.increments('id').primary();
          table.integer('user_id').unsigned().references('id').inTable('user');
          table.integer('industry_id').unsigned().references('id').inTable('industry');
        });
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('user_industry')
    .dropTableIfExists('company')
    .dropTableIfExists('industry')
    .dropTableIfExists('jobpost')
    .dropTableIfExists('location')
    .dropTableIfExists('question')
    .dropTableIfExists('user')
    .dropTableIfExists('video');
};
