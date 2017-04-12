exports.seed = function (knex, Promise) {
  return knex.raw('SET foreign_key_checks = 0;')
  .then(() => {
    return knex('jobpost').del()
      .then(function () {
        return knex('jobpost').insert([
          {
            id: 1,
            //company_id: 4,
            company_id: 1,
            title: 'Jr Dev',
            level: 0,
            description: 'Looking for Jr Dev.',
            industry_id: 1,
            location_id: 1
          },
          {
            id: 2,
            //company_id: 4,
            company_id: 1,
            title: 'Sr Dev',
            level: 2,
            description: 'Looking for Sr Dev.',
            industry_id: 1,
            location_id: 1
          },
          {
            id: 3,
            //company_id: 4,
            company_id: 2,
            title: 'Mid Dev',
            level: 1,
            description: 'Looking for Mid Dev.',
            industry_id: 3,
            location_id: 3
          },
          {
            id: 4,
            //company_id: 4,
            company_id: 2,
            title: 'Hack Reactor HIR',
            level: 0,
            description: 'Looking for Junior Dev for HIR position',
            industry_id: 5,
            location_id: 1
          }
        ]);
      });
  });
};
