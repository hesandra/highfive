exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('jobpost').del()
    .then(function () {
      // Inserts seed entries
      return knex('jobpost').insert([
      {
        id: 1,
        title: 'Jr Dev',
        level: '1',
        description: 'Looking for Jr Dev.',
        company_id: 1,
      },
      {
        id: 2,
        title: 'Sr Dev',
        level: '3',
        description: 'Looking for Sr Dev.',
        company_id: 2,
      }
      ]);
    })
};