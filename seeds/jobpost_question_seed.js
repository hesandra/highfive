exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('SET foreign_key_checks = 0;')
    .then(() => {
      return knex('jobpost_question').del()
        .then(function() {
          // Inserts seed entries
          return knex('jobpost_question').insert([
            {
              id: 1,
              jobpost_id: 1,
              question_id: 1
            },
            {
              id: 2,
              jobpost_id: 1,
              question_id: 2
            },
            {
              id: 3,
              jobpost_id: 2,
              question_id: 3
            },
            {
              id: 4,
              jobpost_id: 3,
              question_id: 4
            },
            {
              id: 5,
              jobpost_id: 1,
              question_id: 5
            },
            {
              id: 6,
              jobpost_id: 2,
              question_id: 6
            },
            {
              id: 7,
              jobpost_id: 3,
              question_id: 7
            },
            {
              id: 8,
              jobpost_id: 3,
              question_id: 8
            },
            {
              id: 9,
              jobpost_id: 3,
              question_id: 9
            }
          ]);
        });
    });
};
