exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('SET foreign_key_checks = 0;')
  .then(() => {
    return knex('submission').del()
      .then(() => {
        // Inserts seed entries
        return knex('submission').insert([
          {
            id: 1,
            user_id: 1,
            jobpost_id: 101,
            //jobpost_id: 1,
            status: null,
            completed: 0,
            notes: 'This applicant is great'
          },
          {
            id: 2,
            user_id: 1,
            jobpost_id: 102,
            //jobpost_id: 1,
            status: 'passed',
            completed: 1,
            notes: 'This one faile all questions'
          },
          {
            id: 3,
            user_id: 2,
            jobpost_id: 101,
            //jobpost_id: 2,
            status: 'viewed',
            completed: 0,
            notes: 'This one faile all questions'
          },
          {
            id: 4,
            user_id: 2,
            jobpost_id: 102,
            //jobpost_id: 2,
            status: 'failed',
            completed: 1,
            notes: 'This one faile all questions'
          },
          {
            id: 5,
            user_id: 3,
            jobpost_id: 3,
            status: null,
            completed: 0,
            notes: 'This one faile all questions'
          },
          {
            id: 6,
            user_id: 3,
            jobpost_id: 3,
            status: 'passed',
            completed: 1,
            notes: 'This one faile all questions'
          }
        ]);
    });
  });
};