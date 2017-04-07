exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('SET foreign_key_checks = 0;')
  .then(() => {
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
            company_id: 1,
          },
          {
            id: 3,
            title: 'Mid Dev',
            level: '2',
            description: 'Looking for Mid Dev.',
            company_id: 2,
          },
          {
            id: 4,
            title: 'Mid DevOps',
            level: '2',
            description: 'Looking for Mid DevOps.',
            company_id: 2,
          },
          {
            id: 5,
            title: 'Sr DevOps',
            level: '3',
            description: 'Looking for Sr DevOps.',
            company_id: 3,
          },
          {
            id: 6,
            title: 'Sr Dev',
            level: '3',
            description: 'Looking for Sr Dev.',
            company_id: 3,
          }
        ]);
      })
  })
};